const CACHE_NAME = 'ga8-pwa-v3';
const ASSETS = ['./', './index.html', './manifest.json', './icon.png', './bg.jpg'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// إشعار وصول التنبيه المنبثق حتى لو التطبيق مقفول
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'تبدأ إحدى محاضراتك خلال 15 دقيقة',
    icon: './icon.png',
    badge: './icon.png',
    vibrate: [200, 100, 200, 100, 200],
  };
  event.waitUntil(self.registration.showNotification('تنبيه محاضرة GA8 ⏰', options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./index.html'));
});
