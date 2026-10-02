// C.S Schedule service worker - everything the UI needs is cached, so the app opens fully styled offline.
const CACHE_NAME = 'cs-pwa-v15';
const EXT_CACHE = 'cs-ext-v1'; // Google Fonts / Supabase client library, filled on first online visit
const CORE = ['./', './index.html', './admin.html', './manifest.json', './icon.png', './icon-192.png', './bg.jpg'];
const EXTRA = ['./bg-graphite.jpg', './bg-wave.jpg', './bg-smoke.jpg', './bg-onyx.jpg',
  './th-ocean.jpg', './th-graphite.jpg', './th-wave.jpg', './th-smoke.jpg', './th-onyx.jpg'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE);
    await Promise.allSettled(EXTRA.map(u => cache.add(u)));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME && k !== EXT_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// pages: try the network first (so timetable updates / new app versions show up), fall back
// to that SAME page's cached copy when offline / slow — not a hardcoded page, so admin.html
// offline still shows admin.html's own shell rather than index.html's
async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 3500))]);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    return (await cache.match(req, { ignoreSearch: true })) || (await cache.match('./index.html', { ignoreSearch: true })) || Response.error();
  }
}
// own files (icons, wallpapers): cache first
async function cacheFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  const hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res && res.ok) cache.put(req, res.clone());
  return res;
}
// fonts / CDN libs (incl. the Supabase client script): serve from cache, refresh in the background
async function staleWhileRevalidate(req) {
  const cache = await caches.open(EXT_CACHE);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await net) || Response.error();
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') { event.respondWith(networkFirst(req)); return; }
  if (url.origin === location.origin) { event.respondWith(cacheFirst(req)); return; }
  // Supabase's own REST/Auth calls (xxxx.supabase.co) are NEVER cached here — only the
  // static CDN library script and fonts are, so account data always stays live.
  if (/(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)$/.test(url.hostname)) { event.respondWith(staleWhileRevalidate(req)); }
});

// إشعار وصول التنبيه المنبثق حتى لو التطبيق مقفول
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'تبدأ إحدى محاضراتك خلال 15 دقيقة',
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [200, 100, 200, 100, 200],
  };
  event.waitUntil(self.registration.showNotification('تنبيه محاضرة ⏰', options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./index.html'));
});
