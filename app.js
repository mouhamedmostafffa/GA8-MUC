/* C.S Schedule - app logic */
const I18N = {
en:{subtitle:"Weekly Schedule",nextClass:"Next class",room:"Room",weekTitle:"Odd / even week",weekDesc:"Switches Tuesday Physics between Exercise and Lab",odd:"Odd",even:"Even",noClass:"No classes today",install:"Install this app",installDesc:"Works offline with reminders before class",installBtn:"Install",iosInstall:'Tap Share, then "Add to Home Screen"',today:"Today",share:"Share",notify:"Alerts",remindOn:"Reminder on",remindOff:"Remind me before",offline:"You're offline",searchPh:"Search a course or doctor",settingsTitle:"Settings",theme:"Appearance",dark:"Dark",light:"Light",arFont:"Arabic font",reminderDefault:"Default reminder time",testNotif:"Send a test notification",aboutLine:"C.S Schedule · Faculty of Computers &amp; AI, May University in Cairo",now:"Now",undo:"Undo",gap:"break",noResults:"No matches",busiest:"Busiest day",attendance:"Mark attended (resets weekly)",shareExport:"Share & export",gpaCalc:"GPA calculator",addCourse:"+ Add course",gpaResult:"Estimated GPA",copyLink:"Copy link",nativeShare:"Share via…",showQr:"Show QR code",weekImage:"Full week as image",saveImage:"Save as image",printPdf:"Print / Save as PDF",bgNote:"Background alerts depend on your OS/browser — most reliable when the app stays installed. Not supported on iOS Safari.",groupLabel:"Group",switchedTo:"Switched to",legendNote:"ODD / EVEN = session runs on odd or even weeks only",pickGroup:"Choose your group",wallLabel:"Wallpaper theme",accSettings:"Account settings",accName:"Name",accGroup:"Group",accEng:"English course",engWed:"Wednesday",engThu:"Thursday",engNone:"None",engHint:"Shows in your schedule on that day, period 4 (14:20 – 16:00).",schedMissing:"My schedule isn't listed",missingTitle:"Your schedule isn't here yet",missingText:"Message me on WhatsApp and tell me your schedule is missing — I'll add it.",waBtn:"Message on WhatsApp",waHelpTitle:"Schedule missing or wrong?",waHelpText:"Message me on WhatsApp:",accSave:"Save changes",accSaved:"Saved",accPassTitle:"Change password",accPassPh:"New password (6+ characters)",accPassSave:"Update",accPassDone:"Password updated",errRate:"Too many attempts, wait a minute and try again",errExists:"This number already has an account — log in instead",errService:"Sign-in service is unavailable right now, try again shortly",offlineNoAccount:"You're offline — the app works without signing in.",gateWaLink:"Schedule missing? Message me on WhatsApp",missingSignupNote:"You can still create the account — message me on WhatsApp and I'll add your schedule.",errNeedNet:"This needs an internet connection",errNameEmpty:"Name can't be empty",errAccSave:"Could not save, try again",
linksNav:"Links",searchLinksPh:"Search links…",linksEmpty:"No links yet",allCats:"All",openLink:"Open",
examNext:"Next exam",examsTitle:"Exams",noExams:"No upcoming exams",examNow:"Now",examFinished:"Finished",icsBtn:"Add to my calendar (.ics)",icsDone:"Calendar file ready — open it to add the events",icsEmpty:"Nothing to export yet",obTitle:"Quick setup",obText:"Confirm your group and English course day so your schedule is exactly right.",obSave:"Save and continue",obSkip:"Later",
accountLabel:"Account",loginTitle:"Log in",gateTitle:"Welcome back",gateSub:"Sign in to sync your attendance, notes and personal items across every device.",gateTitleSignup:"Create your account",gateSubSignup:"One quick sign-up and your schedule, notes and attendance follow you everywhere.",loginTab:"Log in",signupTab:"Sign up",namePh:"Full name",pickGroupField:"Your group",phonePh:"01xxxxxxxxx",passPh:"Password (6+ characters)",loginBtn:"Log in",signupBtn:"Create account",authNote:"Your number is only used to sign in — no SMS is sent.",logoutBtn:"Log out",notLoggedIn:"Log in to sync your attendance, notes and personal items across devices.",loginCta:"Log in / Sign up",openAdmin:"Open admin page",errFill:"Please fill in every field",errPhone:"Enter a valid phone number",errPassShort:"Password must be at least 6 characters",errPickGroup:"Pick your group",errLogin:"Wrong phone number or password",errSignup:"Could not create the account — the number may already be registered",errGeneric:"Something went wrong, try again",errOffline:"No connection — check your internet and try again",
noteTitle:"Your note",notePh:"e.g. bring the lab report, seat near the door…",saveBtn:"Save",deleteBtn:"Delete",noteSaved:"Note saved",noteDeleted:"Note deleted",loginFirst:"Log in first",
addPersonal:"+ Add a personal item to this day",eventTitle:"Personal item",eventTitlePh:"Title (e.g. private tutoring)",eventRoomPh:"Location (optional)",eventSaved:"Personal item added",eventDeleted:"Removed",personal:"Personal",
linksTitle:"Links & resources",noLinks:"Nothing here yet",dismiss:"Dismiss",syncingNote:"Live schedule connected for this group ✓"},
ar:{subtitle:"الجدول الأسبوعي",nextClass:"المحاضرة الجاية",room:"القاعة",weekTitle:"أسبوع فردي / زوجي",weekDesc:"بيبدّل فيزيا الثلاثاء بين تمرين ومعمل",odd:"فردي",even:"زوجي",noClass:"مفيش محاضرات النهارده",install:"ثبّت التطبيق",installDesc:"يشتغل أوفلاين مع تنبيه قبل كل محاضرة",installBtn:"تثبيت",iosInstall:'دوس Share بعدين "Add to Home Screen"',today:"النهارده",share:"مشاركة",notify:"التنبيهات",remindOn:"التنبيه شغال",remindOff:"نبّهني قبلها بـ",offline:"مفيش نت دلوقتي",searchPh:"دور على مادة أو دكتور",settingsTitle:"الإعدادات",theme:"المظهر",dark:"غامق",light:"فاتح",arFont:"الخط العربي",reminderDefault:"وقت التنبيه الافتراضي",testNotif:"جرّب تنبيه تجريبي",aboutLine:"C.S Schedule · كلية الحاسبات والذكاء الاصطناعي، جامعة ماي بالقاهرة",now:"دلوقتي",undo:"تراجع",gap:"فترة راحة",noResults:"مفيش نتايج",busiest:"أزحم يوم",attendance:"سجّل حضور (بيتصفر كل أسبوع)",shareExport:"مشاركة وتصدير",gpaCalc:"حاسبة الجي بي إيه",addCourse:"+ ضيف مادة",gpaResult:"الجي بي إيه التقديري",copyLink:"انسخ الرابط",nativeShare:"شارك عبر…",showQr:"اعرض QR كود",weekImage:"الجدول الأسبوعي كصورة",saveImage:"احفظ كصورة",printPdf:"اطبع / احفظ PDF",bgNote:"التنبيهات في الخلفية بتعتمد على نظام التشغيل والمتصفح — بتشتغل أفضل لما التطبيق يفضل متثبت. مش مدعومة على iOS Safari.",groupLabel:"الجروب",switchedTo:"اتبدّل لجروب",legendNote:"فردي / زوجي = الحصة بتحصل في الأسابيع الفردية أو الزوجية بس",pickGroup:"اختار جروبك",wallLabel:"ثيم الخلفية",accSettings:"إعدادات الحساب",accName:"الاسم",accGroup:"الجروب",accEng:"كورس الإنجليزي",engWed:"الأربع",engThu:"الخميس",engNone:"مفيش",engHint:"بيظهر في جدولك في اليوم ده، الفترة الرابعة (14:20 – 16:00).",schedMissing:"جدولي مش موجود",missingTitle:"جدولك مش موجود لسه",missingText:"كلمني واتساب وابعتلي إن جدولك مش موجود وهضيفهولك.",waBtn:"كلمني واتساب",waHelpTitle:"جدولك مش موجود أو فيه غلط؟",waHelpText:"كلمني واتساب على:",accSave:"احفظ التعديلات",accSaved:"اتحفظ",accPassTitle:"تغيير الباسورد",accPassPh:"الباسورد الجديد (٦ حروف على الأقل)",accPassSave:"حدّث",accPassDone:"الباسورد اتغيّر",errRate:"محاولات كتير، استنى دقيقة وجرب تاني",errExists:"الرقم ده عليه حساب بالفعل — سجّل دخول",errService:"خدمة الدخول مش شغالة دلوقتي، جرب كمان شوية",offlineNoAccount:"مفيش نت — التطبيق شغال من غير تسجيل دخول.",gateWaLink:"جدولي مش موجود؟ كلمني واتساب",missingSignupNote:"تقدر تعمل الحساب عادي — كلمني واتساب وهضيف جدولك.",errNeedNet:"ده محتاج نت",errNameEmpty:"الاسم مينفعش يبقى فاضي",errAccSave:"محصلش حفظ، جرب تاني",
linksNav:"اللينكات",searchLinksPh:"دور على لينك…",linksEmpty:"مفيش لينكات لسه",allCats:"الكل",openLink:"فتح",
examNext:"الامتحان الجاي",examsTitle:"الامتحانات",noExams:"مفيش امتحانات جاية",examNow:"دلوقتي",examFinished:"خلص",icsBtn:"ضيف لتقويمي (.ics)",icsDone:"ملف التقويم جاهز — افتحه عشان يضيف المواعيد",icsEmpty:"مفيش حاجة تتصدّر لسه",obTitle:"إعداد سريع",obText:"أكّد الجروب ويوم كورس الإنجليزي عشان جدولك يطلع مظبوط.",obSave:"احفظ وكمل",obSkip:"بعدين",
accountLabel:"الحساب",loginTitle:"تسجيل الدخول",gateTitle:"أهلاً بيك تاني",gateSub:"سجّل دخول عشان الحضور والنوتس والحاجات الشخصية تتزامن على كل أجهزتك.",gateTitleSignup:"اعمل حسابك",gateSubSignup:"حساب واحد بسيط وهتلاقي جدولك ونوتسك وحضورك معاك في أي مكان.",loginTab:"دخول",signupTab:"حساب جديد",namePh:"الاسم بالكامل",pickGroupField:"جروبك",phonePh:"01xxxxxxxxx",passPh:"الباسورد (٦ حروف على الأقل)",loginBtn:"دخول",signupBtn:"إنشاء حساب",authNote:"رقمك بيتستخدم بس للدخول — مفيش أي SMS هيتبعت.",logoutBtn:"تسجيل خروج",notLoggedIn:"سجّل دخول عشان الحضور والنوتس والحاجات الشخصية تتزامن على كل أجهزتك.",loginCta:"دخول / حساب جديد",openAdmin:"افتح صفحة الأدمن",errFill:"لازم تملأ كل الخانات",errPhone:"اكتب رقم موبايل صحيح",errPassShort:"الباسورد لازم يبقى ٦ حروف على الأقل",errPickGroup:"اختار جروبك",errLogin:"رقم الموبايل أو الباسورد غلط",errSignup:"الحساب متعملش — ممكن الرقم مسجل قبل كده",errGeneric:"حصل خطأ، جرب تاني",errOffline:"مفيش نت — اتأكد من الاتصال وجرب تاني",
noteTitle:"نوتة المحاضرة",notePh:"مثلاً: هات تقرير المعمل، اقعد جنب الباب…",saveBtn:"احفظ",deleteBtn:"امسح",noteSaved:"اتحفظت النوتة",noteDeleted:"اتمسحت النوتة",loginFirst:"سجّل دخول الأول",
addPersonal:"+ ضيف حاجة شخصية لليوم ده",eventTitle:"حاجة شخصية",eventTitlePh:"العنوان (مثلاً: درس خصوصي)",eventRoomPh:"المكان (اختياري)",eventSaved:"اتضافت الحاجة الشخصية",eventDeleted:"اتشالت",personal:"شخصي",
linksTitle:"لينكات ومصادر",noLinks:"لسه مفيش حاجة هنا",dismiss:"إخفاء",syncingNote:"الجدول اللايف متوصل للجروب ده ✓"}
};
const DAYNAMES = { sat:{en:'Saturday',ar:'السبت'}, sun:{en:'Sunday',ar:'الأحد'}, mon:{en:'Monday',ar:'الإثنين'}, tue:{en:'Tuesday',ar:'الثلاثاء'}, wed:{en:'Wednesday',ar:'الأربعاء'}, thu:{en:'Thursday',ar:'الخميس'} };
const CATS = { lecture:{color:'#93A6B8',icon:'chalkboard-user'}, lab:{color:'#8FB89B',icon:'flask'}, exercise:{color:'#C79B77',icon:'pen'}, community:{color:'#B0A98E',icon:'people-group'}, personal:{color:'#C9A7E0',icon:'pen'} };
const TYPE_AR = {Lecture:'محاضرة',Laboratory:'معمل',Exercise:'تمرين',Section:'سكشن','Community Activity':'نشاط طلابي','Language Course':'كورس لغة'};
const PERIODS = {1:'09:00 – 10:40',2:'10:50 – 12:30',3:'12:40 – 14:20',4:'14:20 – 16:00'};
const PMIN = {1:[540,640],2:[650,750],3:[760,860],4:[860,960]};
const DAYS = [{key:'sat',idx:6},{key:'sun',idx:0},{key:'mon',idx:1},{key:'tue',idx:2},{key:'wed',idx:3},{key:'thu',idx:4}];
const COURSES = {
 CAI115:{en:'CAI115 – Introduction to Computer Science',ar:'CAI115 – مقدمة في علوم الحاسب'},
 BSC111:{en:'BSC111 – Physics',ar:'BSC111 – فيزياء'},
 BSC112:{en:'BSC112 – Calculus I',ar:'BSC112 – تفاضل وتكامل (1)'},
 BSC114:{en:'BSC114 – Discrete Mathematics',ar:'BSC114 – رياضيات متقطعة'},
 UNI101:{en:'UNI101 – Professional Ethics and Legal Aspects',ar:'UNI101 – أخلاقيات المهنة والجوانب القانونية'},
 UNI109:{en:'UNI109 – Critical Thinking and Problem-Solving',ar:'UNI109 – التفكير الناقد وحل المشكلات'},
 MATH0:{en:'Math 0 – Mathematics 0',ar:'Math 0 – رياضيات صفر'},
 COMM:{en:'Community Activities',ar:'الأنشطة الطلابية'},
 ENG0:{en:'English 0',ar:'إنجليزي 0'}
};
function course(code){ return COURSES[code] || { en:code, ar:code }; }
const GROUPS = {
GA8:[
 {day:'sun',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'sun',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:3,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'L.A. Ganna',staffAr:'م.م جنا'},
 {day:'mon',p:1,code:'BSC114',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'mon',p:2,code:'BSC112',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'mon',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'tue',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:"L.A. Engy, T.A. M.Khaled",staffAr:'م.م إنجي، م.م خالد'},
 {day:'tue',p:2,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا'}},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C333',staff:'',staffAr:''},
 {day:'wed',p:3,code:'MATH0',type:'Section',cat:'exercise',room:'C224',staff:'T.A. A. Othman',staffAr:'م.م أ.عثمان'},
 {day:'thu',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C223',staff:'L.A. Asmaa, T.A. Albaraa',staffAr:'م.م أسماء، م.م البراء'},
 {day:'thu',p:2,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'thu',p:3,code:'MATH0',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa, Dr. Marwa',staffAr:'أ.د رامي، د.نجلاء، د.مروة'}
],
GA6:[
 {day:'sun',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'sun',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:4,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'mon',p:1,code:'BSC114',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'mon',p:2,code:'BSC112',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'mon',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'tue',p:1,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا'}},
 {day:'tue',p:2,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Engy, T.A. M.Khaled',staffAr:'م.م إنجي، م.م خالد'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C333',staff:'',staffAr:''},
 {day:'tue',p:4,code:'MATH0',type:'Section',cat:'exercise',room:'C224',staff:'T.A. A. Othman',staffAr:'م.م أ.عثمان'},
 {day:'thu',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'thu',p:2,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Shahd',staffAr:'م.م شهد'},
 {day:'thu',p:3,code:'MATH0',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa, Dr. Marwa',staffAr:'أ.د رامي، د.نجلاء، د.مروة'}
],
GC1:[
 {day:'sun',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'sun',p:2,code:'BSC112',type:'Exercise',cat:'exercise',room:'C223',staff:'L.A. Asmaa, T.A. Albaraa',staffAr:'م.م أسماء، م.م البراء'},
 {day:'sun',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'sun',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:1,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'mon',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:4,code:'BSC114',type:'Exercise',cat:'exercise',room:'C331',staff:'L.A. Amira, T.A. May',staffAr:'م.م أميرة، م.م مي'},
 {day:'tue',p:1,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C435',staff:'L.A. Mariam',staffAr:'م.م مريم'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C141',staff:'',staffAr:''},
 {day:'wed',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'wed',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GC2:[
 {day:'sun',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Amir, T.A. Nada',staffAr:'م.م أمير، م.م ندى'},
 {day:'sun',p:2,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'sun',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'sun',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:1,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء'}},
 {day:'mon',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:4,code:'BSC114',type:'Exercise',cat:'exercise',room:'C222',staff:'L.A. Dina, T.A. Ziad',staffAr:'م.م دينا، م.م زياد'},
 {day:'tue',p:2,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C435',staff:'L.A. Alieldeen',staffAr:'م.م علي الدين'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C141',staff:'',staffAr:''},
 {day:'wed',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'wed',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GD2:[
 {day:'sun',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'sun',p:3,code:'UNI109',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'sun',p:4,code:'UNI101',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:1,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:2,code:'BSC112',type:'Exercise',cat:'exercise',room:'C223',staff:'L.A. Asmaa, T.A. Albaraa',staffAr:'م.م أسماء، م.م البراء'},
 {day:'mon',p:3,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'mon',p:4,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء'}},
 {day:'tue',p:2,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Shahd',staffAr:'م.م شهد'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C101',staff:'',staffAr:''},
 {day:'wed',p:3,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'thu',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:3,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GA7:[
 {day:'sun',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'sun',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:3,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Alieldeen',staffAr:'م.م علي الدين'},
 {day:'sun',p:4,code:'BSC112',type:'Exercise',cat:'exercise',room:'C329',staff:'T.A. M. Ayman, T.A. M. Mostafa',staffAr:'م.م أيمن، م.م مصطفى'},
 {day:'mon',p:1,code:'BSC114',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'mon',p:2,code:'BSC112',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'mon',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'tue',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr, T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'tue',p:2,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C333',staff:'',staffAr:''},
 {day:'wed',p:3,code:'MATH0',type:'Section',cat:'exercise',room:'C224',staff:'T.A. A. Othman',staffAr:'م.م أ.عثمان'},
 {day:'thu',p:2,code:'BSC114',type:'Exercise',cat:'exercise',room:'C222',staff:'L.A. Dina, T.A. Ziad',staffAr:'م.م دينا، م.م زياد'},
 {day:'thu',p:3,code:'MATH0',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa, Dr. Marwa',staffAr:'أ.د رامي، د.نجلاء، د.مروة'}
],
GD3:[
 {day:'sun',p:1,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Ganna',staffAr:'م.م جنا'},
 {day:'sun',p:2,code:'BSC114',type:'Exercise',cat:'exercise',room:'C331',staff:'L.A. Amira, T.A. May',staffAr:'م.م أميرة، م.م مي'},
 {day:'sun',p:3,code:'UNI109',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'sun',p:4,code:'UNI101',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:1,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:2,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'mon',p:3,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Amir, T.A. Nada',staffAr:'م.م أمير، م.م ندى'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C101',staff:'Unassigned',staffAr:'غير محدد'},
 {day:'wed',p:1,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'wed',p:3,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'thu',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:3,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GB4:[
 {day:'sun',p:1,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:2,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'mon',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'mon',p:2,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr, T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'mon',p:3,code:'UNI109',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:4,code:'UNI101',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'tue',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'tue',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C209',staff:'',staffAr:''},
 {day:'tue',p:4,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء'}},
 {day:'wed',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C331',staff:'L.A. Amira, T.A. May',staffAr:'م.م أميرة، م.م مي'},
 {day:'wed',p:3,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Mariam',staffAr:'م.م مريم'}
],
GC4:[
 {day:'sun',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'sun',p:2,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Amir, T.A. Nada',staffAr:'م.م أمير، م.م ندى'},
 {day:'sun',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'sun',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'mon',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:3,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء'}},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C141',staff:'',staffAr:''},
 {day:'wed',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'wed',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GA1:[
 {day:'sun',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'sun',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:3,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'sun',p:4,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr, T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'mon',p:1,code:'BSC114',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'mon',p:2,code:'BSC112',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'mon',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'tue',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C225',staff:'L.A. Andro, T.A. Heba',staffAr:'م.م أندرو، م.م هبة'},
 {day:'tue',p:2,code:'BSC114',type:'Exercise',cat:'exercise',room:'C331',staff:'L.A. Amira, T.A. May',staffAr:'م.م أميرة، م.م مي'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C333',staff:'',staffAr:''},
 {day:'tue',p:4,code:'MATH0',type:'Section',cat:'exercise',room:'C330',staff:'T.A. Shahd Abdelsalam',staffAr:'م.م شهد عبدالسلام'},
 {day:'thu',p:1,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Alieldeen',staffAr:'م.م علي الدين'},
 {day:'thu',p:3,code:'MATH0',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa, Dr. Marwa',staffAr:'أ.د رامي، د.نجلاء، د.مروة'}
],
GB2:[
 {day:'sun',p:1,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:2,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'mon',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Amir, T.A Nada',staffAr:'م.م أمير، م.م ندى'},
 {day:'mon',p:2,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا'}},
 {day:'mon',p:3,code:'UNI109',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:4,code:'UNI101',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'tue',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'tue',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C209',staff:'',staffAr:''},
 {day:'tue',p:4,code:'BSC114',type:'Exercise',cat:'exercise',room:'C222',staff:'L.A. Dina, T.A. Ziad',staffAr:'م.م دينا، م.م زياد'},
 {day:'wed',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C329',staff:'T.A. M. Ayman, T.A. M. Mostafa',staffAr:'م.م أيمن، م.م مصطفى'},
 {day:'wed',p:3,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Ganna',staffAr:'م.م جنا'}
],
GC5:[
 {day:'sun',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C329',staff:'T.A. M. Ayman, T.A. M. Mostafa',staffAr:'م.م أيمن، م.م مصطفى'},
 {day:'sun',p:2,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Mariam',staffAr:'م.م مريم'},
 {day:'sun',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'sun',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:1,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Engy, T.A. M.Khaled',staffAr:'م.م إنجي، م.م خالد'},
 {day:'mon',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:4,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C141',staff:'',staffAr:''},
 {day:'wed',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'wed',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'wed',p:3,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:"T.A. Mo'men, T.A. Gana",staffAr:'م.م مؤمن، م.م جانا'}},
 {day:'thu',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GC3:[
 {day:'sun',p:1,code:'BSC112',type:'Exercise',cat:'exercise',room:'C223',staff:'L.A. Asmaa, T.A. Albaraa',staffAr:'م.م أسماء، م.م البراء'},
 {day:'sun',p:2,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'sun',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'sun',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C135',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'mon',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C222',staff:'L.A. Dina, T.A. Ziad',staffAr:'م.م دينا، م.م زياد'},
 {day:'mon',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:3,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C141',staff:'',staffAr:''},
 {day:'tue',p:4,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C435',staff:'L.A. Alieldeen',staffAr:'م.م علي الدين'},
 {day:'wed',p:1,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'wed',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
],
GA5:[
 {day:'sun',p:1,code:'CAI115',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'},
 {day:'sun',p:2,code:'BSC111',type:'Lecture',cat:'lecture',room:'C333',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'sun',p:3,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Shahd',staffAr:'م.م شهد'},
 {day:'sun',p:4,code:'BSC112',type:'Exercise',cat:'exercise',room:'C223',staff:'L.A. Asmaa, T.A. Albaraa',staffAr:'م.م أسماء، م.م البراء'},
 {day:'mon',p:1,code:'BSC114',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'mon',p:2,code:'BSC112',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'mon',p:3,code:'UNI101',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:4,code:'UNI109',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'tue',p:1,code:'BSC111',type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة',alt:{type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Toqa, T.A. Habeba',staffAr:'م.م توقى، م.م حبيبة'}},
 {day:'tue',p:2,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C228',staff:'T.A. Amr, T.A. Ayman',staffAr:'م.م عمرو، م.م أيمن'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C333',staff:'',staffAr:''},
 {day:'tue',p:4,code:'MATH0',type:'Section',cat:'exercise',room:'C224',staff:'T.A. A. Othman',staffAr:'م.م أ.عثمان'},
 {day:'thu',p:1,code:'BSC114',type:'Exercise',cat:'exercise',room:'C222',staff:'L.A. Dina, T.A. Ziad',staffAr:'م.م دينا، م.م زياد'},
 {day:'thu',p:3,code:'MATH0',type:'Lecture',cat:'lecture',room:'C201',staff:'Prof. Ramy, Dr. Naglaa, Dr. Marwa',staffAr:'أ.د رامي، د.نجلاء، د.مروة'}
],
GD4:[
 {day:'sun',p:2,code:'BSC114',type:'Exercise',cat:'exercise',room:'C430',staff:'T.A. Yousef, T.A. M. Esmaeel',staffAr:'م.م يوسف، م.م إسماعيل'},
 {day:'sun',p:3,code:'UNI109',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Abdullah',staffAr:'أ.د رانيا، د.عبدالله'},
 {day:'sun',p:4,code:'UNI101',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Bahaa',staffAr:'أ.د هاني، د.بهاء'},
 {day:'mon',p:1,code:'BSC111',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Hany, Dr. Kareem, Dr. Ahmed Fawzy',staffAr:'أ.د هاني، د.كريم، د.أحمد فوزي'},
 {day:'mon',p:2,code:'BSC112',type:'Exercise',cat:'exercise',room:'C329',staff:'T.A. M. Ayman, T.A. M. Mostafa',staffAr:'م.م أيمن، م.م مصطفى'},
 {day:'mon',p:3,code:'CAI115',type:'Laboratory',cat:'lab',room:'P.L.C220',staff:'L.A. Engy, T.A. M.Khaled',staffAr:'م.م إنجي، م.م خالد'},
 {day:'tue',p:3,code:'COMM',type:'Community Activity',cat:'community',room:'C101',staff:'',staffAr:''},
 {day:'tue',p:4,code:'UNI109',type:'Laboratory',cat:'lab',room:'P.L.C334',staff:'L.A. Mariam',staffAr:'م.م مريم'},
 {day:'wed',p:1,code:'BSC111',type:'Exercise',cat:'exercise',room:'C432',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء',alt:{type:'Laboratory',cat:'lab',room:'Phys. Lab',staff:'L.A. Danial, T.A. Shaimaa',staffAr:'م.م دانيال، م.م شيماء'}},
 {day:'wed',p:3,code:'BSC112',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Naglaa',staffAr:'أ.د رامي، د.نجلاء'},
 {day:'thu',p:2,code:'BSC114',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Ramy, Dr. Marwa, Dr. Lamya',staffAr:'أ.د رامي، د.مروة، د.لمياء'},
 {day:'thu',p:3,code:'CAI115',type:'Lecture',cat:'lecture',room:'C209',staff:'Prof. Rania, Dr. Yasser, Dr. Ghada',staffAr:'أ.د رانيا، د.ياسر، د.غادة'}
]
};
let group = localStorage.getItem('a8_group') || 'GA8';
if(!GROUPS[group]) group = 'GA8';
let L = GROUPS[group];

const $ = id => document.getElementById(id);

// ============================================================================
// Backend layer (Supabase). Everything here is defensive: if CS_CONFIG is
// still the placeholder, if the CDN script failed to load (offline), or any
// call errors out, the app simply keeps behaving exactly like the pure
// static/local version above — nothing here is allowed to break first paint.
// ============================================================================
const BACKEND_ON = !!(window.CS_CONFIG && window.CS_CONFIG.SUPABASE_URL && !window.CS_CONFIG.SUPABASE_URL.startsWith('YOUR_'));
let sb = null;
let session = null;       // current Supabase auth session, or null
let profile = null;       // { id, name, phone, group_key, role, ... } for the logged-in user
let liveGroups = {};      // group_key -> true once that group's lectures came from the DB at least once
let notesMap = {};        // lecture_id -> note text (current user's own notes)
let attMap = {};          // `${lecture_id}-${week_num}` -> true (current user's own attendance, DB-backed)
let personalEvents = [];  // this user's personal_events rows
const TYPE_TO_CAT = {Lecture:'lecture',Laboratory:'lab',Exercise:'exercise',Section:'exercise','Community Activity':'community'};

function rowToLecture(row){
  const alt = row.alt ? { type:row.alt.type, cat:TYPE_TO_CAT[row.alt.type]||'lecture', room:row.alt.room, staff:row.alt.staff, staffAr:row.alt.staff_ar } : undefined;
  const l = { id:row.id, day:row.day, p:row.period, code:row.code, type:row.type, cat:TYPE_TO_CAT[row.type]||'lecture', room:row.room, staff:row.staff, staffAr:row.staff_ar };
  if(alt) l.alt = alt;
  return l;
}
let WA_NUM = '201119634679', WA_LOCAL = '01119634679';
let siteSettings = (function(){ try{ return JSON.parse(localStorage.getItem('cs_settings')||'{}')||{}; }catch(e){ return {}; } })();
const sleep = ms => new Promise(r=>setTimeout(r,ms));
function esc(v){ return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function jget(k, d){ try{ const v = JSON.parse(localStorage.getItem(k)); return v==null ? d : v; }catch(e){ return d; } }
function jset(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
function normDigits(v){ return (v||'').replace(/[\u0660-\u0669]/g, d=>'\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(d)).replace(/[\u06F0-\u06F9]/g, d=>'\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9'.indexOf(d)); }
function cleanPhone(v){ return normDigits(v||'').replace(/[\s\-()]/g,''); }
function e164(local){
  const d = cleanPhone(local);
  if(d.startsWith('+')) return d;
  if(d.startsWith('00')) return '+'+d.slice(2);
  if(d.startsWith('0')) return '+20'+d.slice(1);
  if(d.startsWith('20') && d.length===12) return '+'+d;
  return '+20'+d;
}
function localPhone(p){ const d=(p||'').replace(/\D/g,''); if(!d) return ''; if(d.startsWith('20') && d.length===12) return '0'+d.slice(2); return d.startsWith('0') ? d : '0'+d; }
function validPhone(v){ const d=cleanPhone(v); return /^01[0-9]{9}$/.test(d) || /^(\+|00)?20[0-9]{10}$/.test(d); }
function isNetErr(e){ const m=((e&&e.message)||'').toLowerCase(); return !navigator.onLine || !!(e && (e.status===0 || e.name==='AuthRetryableFetchError')) || /network|failed to fetch|load failed|timeout/.test(m); }

// cached state so the app keeps working with no connection
profile = jget('cs_profile', null);
let authChecked = false, sessionNetErr = false, explicitLogout = false, pickedGroup = false, netRetries = 0, authGroup = '', authEng = 'none';
(function loadCachedData(){
  try{
    Object.keys(localStorage).forEach(k=>{ if(k.indexOf('cs_lectures_')===0){ const rows=jget(k,null); if(rows && rows.length){ GROUPS[k.slice(12)] = rows; liveGroups[k.slice(12)] = true; } } });
    const c = jget('cs_courses', null); if(c) Object.assign(COURSES, c);
    const saved = localStorage.getItem('a8_group'); if(saved && GROUPS[saved]) group = saved;
    L = GROUPS[group];
  }catch(e){}
})();

function ucKey(){ return profile ? 'cs_ud_'+profile.id+'_'+group : null; }
function loadUserCache(){ const k=ucKey(); if(!k) return; const c=jget(k,null); if(c){ notesMap=c.notes||{}; attMap=c.att||{}; personalEvents=c.events||[]; } }
function saveUserCache(){ const k=ucKey(); if(!k) return; jset(k,{notes:notesMap, att:attMap, events:personalEvents}); }
if(profile) loadUserCache();

function engDay(){ const d = (profile && profile.eng_day) || localStorage.getItem('cs_eng_day') || 'none'; return d; }
function engLectures(day){
  if(engDay()!==day) return [];
  return [{ day:day, p:4, code:'ENG0', type:'Language Course', cat:'community', room:'—', staff:'', staffAr:'', isEng:true }];
}
function scheduleMissing(){ return !!(profile && profile.role==='student' && !profile.group_key); }
function missingView(){ return scheduleMissing() && !pickedGroup; }
function setL(){ L = missingView() ? [] : (GROUPS[group]||[]); paintGroup(); refreshView(); }
function adoptProfileGroup(force){
  if(!profile || profile.role!=='student') return;
  if(profile.group_key && GROUPS[profile.group_key]){
    if(force || !localStorage.getItem('a8_group')) applyGroup(profile.group_key, false);
  } else if(!profile.group_key){ pickedGroup = false; }
  setL();
}

function waHref(name, phone, grp){
  const ar = lang==='ar';
  const msg = ar
    ? `السلام عليكم، جدولي مش موجود على C.S Schedule.\nالاسم: ${name||'—'}\nالرقم: ${phone||'—'}\nالجروب: ${grp||'مش محدد'}`
    : `Hi, my schedule isn't on C.S Schedule.\nName: ${name||'—'}\nPhone: ${phone||'—'}\nGroup: ${grp||'not set'}`;
  return `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;
}
function waHrefProfile(){ const p=profile||{}; return waHref(p.name, localPhone(p.phone), p.group_key); }
function missingCardHTML(){
  return `<div class="glass rounded-2xl p-5 text-center missing-card">
    <p class="text-sm font-bold text-white mb-1">${t('missingTitle')}</p>
    <p class="text-[11px] text-zinc-400 leading-relaxed">${t('missingText')}</p>
    <p class="text-sm font-bold text-white mt-2" style="direction:ltr">${WA_LOCAL}</p>
    <a class="wa-btn" href="${waHrefProfile()}" target="_blank" rel="noopener"><svg class="ic"><use href="#i-wa"/></svg><span>${t('waBtn')}</span></a>
  </div>`;
}

// ---- sign-in gate -----------------------------------------------------------
// The gate only ever blocks the app while ONLINE. Offline (or when the sign-in service
// can't be reached but a stored login exists) the app stays fully usable.
function hasStoredSession(){ try{ return Object.keys(localStorage).some(k=> /^sb-.*-auth-token/.test(k) && localStorage.getItem(k)); }catch(e){ return false; } }
function gateNeeded(){
  if(!BACKEND_ON || session) return false;
  if(!navigator.onLine) return false;
  if(!authChecked) return !hasStoredSession() && !profile;
  if(sessionNetErr && hasStoredSession()) return false;
  return true;
}
function updateGate(){
  const el = $('auth-sheet'); if(!el) return;
  const must = gateNeeded(), was = el.classList.contains('open');
  el.classList.toggle('open', must);
  if(must && !was) setAuthMode('login');
}
function uid(){ return (session && session.user && session.user.id) || (profile && profile.id) || null; }
function requireAuth(){
  if(uid()) return true;
  if(!navigator.onLine){ showToast(t('errOffline')); return false; }
  if(BACKEND_ON) openAuthSheet('login');
  return false;
}

let sbPromise = null;
function injectScript(src){ return new Promise((res,rej)=>{ const el=document.createElement('script'); el.src=src; el.onload=res; el.onerror=rej; document.head.appendChild(el); }); }
function ensureSb(){
  if(sb) return Promise.resolve(sb);
  if(sbPromise) return sbPromise;
  sbPromise = (async ()=>{
    for(let i=0;i<30 && !window.supabase;i++) await sleep(100);
    if(!window.supabase && navigator.onLine){
      try{ await injectScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'); }catch(e){}
      for(let i=0;i<20 && !window.supabase;i++) await sleep(100);
    }
    if(!window.supabase){ sbPromise = null; return null; }
    sb = window.supabase.createClient(window.CS_CONFIG.SUPABASE_URL, window.CS_CONFIG.SUPABASE_ANON_KEY, {
      auth: { autoRefreshToken:true, persistSession:true, detectSessionInUrl:false }
    });
    sb.auth.onAuthStateChange(onAuthEvent);
    return sb;
  })();
  return sbPromise;
}
// never await supabase calls inside the auth callback itself (can deadlock) — defer them
function onAuthEvent(event, s){
  setTimeout(async ()=>{
    if(event==='SIGNED_OUT'){
      session = null;
      if(explicitLogout || navigator.onLine){ profile = null; try{ localStorage.removeItem('cs_profile'); }catch(e){} }
    } else if(s){
      session = s; sessionNetErr = false;
      if(!profile || profile.id!==s.user.id) await loadProfile();
    } else return;
    renderAccountBox(); setL();
  }, 0);
}
async function checkSession(){
  sessionNetErr = false;
  try{
    const { data, error } = await sb.auth.getSession();
    if(data && data.session){ session = data.session; netRetries = 0; return; }
    if(error && isNetErr(error)) sessionNetErr = true;
  }catch(e){ if(isNetErr(e)) sessionNetErr = true; }
  if(!navigator.onLine && hasStoredSession()) sessionNetErr = true;
  session = null;
  if(sessionNetErr && netRetries<6){ netRetries++; setTimeout(recheckSession, 5000*netRetries); }
}
async function recheckSession(){
  if(!sb || session) return;
  await checkSession();
  if(session){ await loadProfile(); renderAccountBox(); setL(); syncAll(); }
  else updateGate();
}
function syncAll(){ syncSettings(); syncExams(); syncCourses(); syncGroup(group); syncLinksAndAnnouncements(); syncNotesAttendanceEvents(); }
async function bootAuth(){
  if(!BACKEND_ON) return;
  const c = await ensureSb();
  if(!c){
    sessionNetErr = true; authChecked = true; updateGate(); renderAccountBox();
    setTimeout(maybeOnboard, 900);
    if(navigator.onLine && netRetries<6){ netRetries++; setTimeout(bootAuth, 6000); }
    return;
  }
  syncSettings();
  if(!session) await checkSession();
  if(session && (!profile || profile.id!==session.user.id)) await loadProfile();
  authChecked = true;
  adoptProfileGroup(false);
  renderAccountBox(); updateGate();
  syncAll(); flushOutbox();
  setTimeout(maybeOnboard, 900);
}
window.addEventListener('online', ()=>{
  netRetries = 0;
  if(sb && authChecked){ recheckSession().then(()=>{ if(session) syncAll(); }); } else bootAuth();
  updateGate(); renderAccountBox();
});
window.addEventListener('offline', ()=>{ updateGate(); renderAccountBox(); });

async function loadProfile(fb){
  if(!sb || !session) return;
  let row = null;
  for(let i=0;i<3 && !row;i++){
    try{
      const r = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
      if(r && r.data) row = r.data; else if(r && r.error && isNetErr(r.error)) break;
    }catch(e){ if(isNetErr(e)) break; }
    if(!row) await sleep(600*(i+1));
  }
  const meta = session.user.user_metadata || {};
  if(row){ if(row.eng_day==null) row.eng_day = meta.eng_day || 'none'; profile = row; }
  else {
    const cached = (profile && profile.id===session.user.id) ? profile : null;
    profile = Object.assign({ id:session.user.id, name:meta.name||'', phone:session.user.phone||'', group_key:meta.group_key||null, role:'student', eng_day:meta.eng_day||'none' }, cached||{}, fb||{});
  }
  jset('cs_profile', profile);
  try{ localStorage.setItem('cs_eng_day', engDay()); }catch(e){}
  loadUserCache();
}

// ---- data sync (lectures / courses / links / announcements) --------------
async function syncCourses(){
  if(!navigator.onLine || !sb) return;
  try{
    const { data, error } = await sb.from('courses').select('*');
    if(error || !data) return;
    data.forEach(r=>{ COURSES[r.code] = { en:r.title_en, ar:r.title_ar }; });
    const saved = {}; data.forEach(r=>{ saved[r.code] = COURSES[r.code]; }); jset('cs_courses', saved);
  }catch(e){}
}
async function syncGroup(g){
  if(!navigator.onLine || !sb) return;
  try{
    const { data, error } = await sb.from('lectures').select('*').eq('group_key', g).order('day').order('period');
    if(error || !data || !data.length) return; // keep whatever we had (DB/seed not run yet for this group)
    const rows = data.map(rowToLecture);
    GROUPS[g] = rows; liveGroups[g] = true;
    jset('cs_lectures_'+g, rows);
    if(g===group){ setL(); }
    if(session) syncNotesAttendanceEvents();
  }catch(e){}
}
function refreshView(){ buildTabs(); buildLegend(); updateWeekCard(); render(); calcNext(); }

async function syncSettings(){
  if(!navigator.onLine || !sb) return;
  try{
    const { data, error } = await sb.from('site_settings').select('*');
    if(error || !data) return;
    const o = {}; data.forEach(r=>{ o[r.key] = r.value; });
    siteSettings = o; jset('cs_settings', o); applySettings();
  }catch(e){}
}
function applySettings(){
  const raw = cleanPhone(siteSettings.whatsapp||'').replace(/\D/g,'');
  if(raw.length>=10){ WA_NUM = raw.startsWith('0') ? '20'+raw.slice(1) : raw; WA_LOCAL = localPhone(WA_NUM); }
  document.querySelectorAll('.wa-local').forEach(el=>{ el.textContent = WA_LOCAL; });
  const lt = lang==='ar' ? (siteSettings.links_title_ar||'') : (siteSettings.links_title_en||'');
  $('lp-title').textContent = lt || t('linksTitle');
  const signupOpen = siteSettings.signup_open!=='0';
  const sb2 = document.querySelector('#auth-mode-seg [data-v=signup]');
  if(sb2) sb2.style.display = signupOpen ? '' : 'none';
  if(!signupOpen && $('auth-form').dataset.mode==='signup') setAuthMode('login');
  paintAnnouncements();
  if(typeof refreshAuthTexts==='function') $('gate-wa-link').href = waHref('', '', '');
}
let lastAnn = [];
function bannerHTML(){
  if(siteSettings.banner_on!=='1') return '';
  const m = (lang==='ar' ? siteSettings.banner_ar : siteSettings.banner_en) || siteSettings.banner_en || siteSettings.banner_ar || '';
  if(!m) return '';
  return `<div class="glass rounded-2xl p-3.5 announce-bar flex items-start gap-2.5 rise"><svg class="ic text-xs mt-0.5 shrink-0" style="color:var(--acc)"><use href="#i-circle-info"/></svg><p class="text-xs text-zinc-100 flex-1 leading-relaxed font-semibold">${esc(m)}</p></div>`;
}
function paintAnnouncements(){
  let dismissed = []; try{ dismissed = JSON.parse(localStorage.getItem('cs_dismissed_ann')||'[]'); }catch(e){}
  const visible = lastAnn.filter(a=>!dismissed.includes(a.id));
  $('announce-list').innerHTML = bannerHTML() + visible.map(a=>`
    <div class="glass rounded-2xl p-3.5 announce-bar flex items-start gap-2.5 rise" data-ann="${a.id}">
      <svg class="ic text-xs mt-0.5 shrink-0" style="color:var(--acc)"><use href="#i-circle-info"/></svg>
      <p class="text-xs text-zinc-200 flex-1 leading-relaxed">${esc(a.message)}</p>
      <button class="ann-dismiss text-[10px] text-zinc-500 font-bold shrink-0" data-id="${a.id}">${t('dismiss')}</button>
    </div>`).join('');
}
function renderAnnouncements(list){ lastAnn = list; jset('cs_ann', list); paintAnnouncements(); }
async function syncLinksAndAnnouncements(){
  if(!navigator.onLine || !sb) return;
  try{
    const [{data:links}, {data:ann}] = await Promise.all([
      sb.from('links').select('*').order('order_index').order('created_at',{ascending:false}),
      sb.from('announcements').select('*').order('created_at',{ascending:false})
    ]);
    if(links) renderLinks(links);
    if(ann) renderAnnouncements(ann.filter(a=> !a.expires_at || new Date(a.expires_at)>new Date()));
  }catch(e){}
}
// ---- dedicated links page ----
let linksData = jget('cs_links', []), lpCat = '', lpQuery = '';
lastAnn = jget('cs_ann', []);
function visibleLinks(){ return linksData.filter(l=> !l.group_key || l.group_key===group); }
function renderLinks(links){ linksData = links||[]; jset('cs_links', linksData); paintLinks(); }
function linkDomain(u){ try{ return new URL(u).hostname.replace(/^www\./,''); }catch(e){ return u; } }
function paintLinks(){
  const all = visibleLinks();
  const cats = Array.from(new Set(all.map(l=>(l.category||'').trim()).filter(Boolean)));
  if(lpCat && !cats.includes(lpCat)) lpCat = '';
  $('lp-cats').innerHTML = cats.length ? [`<button type="button" class="lp-cat-chip${lpCat===''?' on':''}" data-c="">${t('allCats')}</button>`].concat(cats.map(c=>`<button type="button" class="lp-cat-chip${lpCat===c?' on':''}" data-c="${esc(c)}">${esc(c)}</button>`)).join('') : '';
  const q = lpQuery.trim().toLowerCase();
  const rows = all.filter(l=> (!lpCat || (l.category||'').trim()===lpCat) && (!q || ((l.title||'')+' '+(l.description||'')+' '+(l.category||'')).toLowerCase().includes(q)));
  $('lp-count').textContent = rows.length;
  $('lp-grid').innerHTML = rows.length ? rows.map(l=>`<a class="lp-card glass rise" href="${esc(l.url)}" target="_blank" rel="noopener">
      <div class="lp-emoji">${esc(l.emoji||'🔗')}</div>
      <h3>${esc(l.title)}</h3>
      ${l.description ? `<p class="lp-desc">${esc(l.description)}</p>` : '<p class="lp-desc"></p>'}
      <div class="lp-foot"><span class="lp-dom">${esc(linkDomain(l.url))}</span>${l.category?`<span class="lp-tag">${esc(l.category)}</span>`:''}<svg class="ic" style="width:11px;height:11px"><use href="#i-link"/></svg></div>
    </a>`).join('') : `<div class="lp-empty">${t('linksEmpty')}</div>`;
}
function openLinksPage(on){
  $('links-page').classList.toggle('open', on);
  document.documentElement.style.overflow = on ? 'hidden' : '';
  if(on){ paintLinks(); try{ history.replaceState(null,'','#links'); }catch(e){} }
  else { try{ if(location.hash==='#links') history.replaceState(null,'',location.pathname+location.search); }catch(e){} }
}
$('dock-links-btn').addEventListener('click', ()=> openLinksPage(true));
$('lp-back').addEventListener('click', ()=> openLinksPage(false));
$('lp-search').addEventListener('input', e=>{ lpQuery = e.target.value; paintLinks(); });
$('lp-cats').addEventListener('click', e=>{ const b=e.target.closest('.lp-cat-chip'); if(!b) return; lpCat = b.dataset.c; paintLinks(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && $('links-page').classList.contains('open')) openLinksPage(false); });
window.addEventListener('hashchange', ()=>{ openLinksPage(location.hash==='#links'); });

// ---- exams (admin-managed) ----
let examsData = jget('cs_exams', []);
const EXAM_KIND = { midterm:{en:'Midterm',ar:'ميدتيرم'}, final:{en:'Final',ar:'فاينال'}, quiz:{en:'Quiz',ar:'كويز'}, oral:{en:'Oral',ar:'شفهي'}, other:{en:'Exam',ar:'امتحان'} };
async function syncExams(){
  if(!navigator.onLine || !sb) return;
  try{
    const { data, error } = await sb.from('exams').select('*').order('starts_at');
    if(error || !data) return;
    examsData = data; jset('cs_exams', data); paintExams();
  }catch(e){}
}
function examEnd(e){ return new Date(e.starts_at).getTime() + (e.duration_min||120)*60000; }
function upcomingExams(){
  const now = Date.now();
  return examsData.filter(e=> (!e.group_key || e.group_key===group) && examEnd(e)>now).sort((a,b)=> new Date(a.starts_at)-new Date(b.starts_at));
}
function examTitle(e){
  const k = EXAM_KIND[e.kind] || EXAM_KIND.other, kt = lang==='ar' ? k.ar : k.en;
  const base = e.title || (e.course_code ? shortTitle(e.course_code) : '');
  return base ? `${base} · ${kt}` : kt;
}
function fmtExamLeft(ms){
  if(ms<=0) return t('examNow');
  const m=Math.floor(ms/60000), d=Math.floor(m/1440), h=Math.floor((m%1440)/60), mi=m%60;
  if(lang==='ar') return d>0 ? `${d} يوم${h?` و${h} ساعة`:''}` : (h>0 ? `${h} ساعة${mi?` و${mi} دقيقة`:''}` : `${mi} دقيقة`);
  return d>0 ? `${d}d ${h}h` : (h>0 ? `${h}h ${mi}m` : `${mi}m`);
}
function examDateStr(e){
  const d = new Date(e.starts_at), loc = lang==='ar' ? 'ar-EG' : 'en-GB';
  return d.toLocaleDateString(loc,{weekday:'short',day:'numeric',month:'short'}) + ' · ' + d.toLocaleTimeString(loc,{hour:'2-digit',minute:'2-digit'});
}
function paintExams(){
  const card = $('exam-card'); if(!card) return;
  const list = upcomingExams();
  if(!list.length){ card.style.display = 'none'; }
  else {
    const e = list[0], left = new Date(e.starts_at) - Date.now();
    card.style.display = 'block';
    $('exam-next-title').textContent = examTitle(e);
    $('exam-next-left').textContent = fmtExamLeft(left);
    $('exam-next-meta').textContent = examDateStr(e) + (e.room ? ' · ' + e.room : '');
    $('exam-more').textContent = list.length>1 ? '+'+(list.length-1) : '';
    card.classList.toggle('exam-soon', left < 3*86400000);
  }
  if($('exams-sheet').classList.contains('open')) paintExamsSheet();
}
function paintExamsSheet(){
  const list = upcomingExams();
  $('exams-list').innerHTML = list.length ? list.map(e=>{
    const left = new Date(e.starts_at) - Date.now();
    return `<div class="glass exam-row${left<3*86400000?' exam-soon':''}">
      <div class="ex-left">${esc(fmtExamLeft(left))}</div>
      <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white">${esc(examTitle(e))}</p>
      <p class="text-[10px] text-zinc-400">${esc(examDateStr(e))}${e.room?' · '+esc(e.room):''}</p>
      ${e.note?`<p class="text-[10px] text-zinc-500 mt-0.5">${esc(e.note)}</p>`:''}</div></div>`;
  }).join('') : `<p class="text-xs text-zinc-400 text-center py-6">${t('noExams')}</p>`;
}
$('exam-card').addEventListener('click', ()=>{ paintExamsSheet(); openSheet('exams-sheet'); });
$('exam-card').addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); paintExamsSheet(); openSheet('exams-sheet'); } });
setInterval(paintExams, 30000);

// ---- calendar export (.ics) ----
const ICS_WEEKS = 16, DAY_OFF = { sat:0, sun:1, mon:2, tue:3, wed:4, thu:5 };
function pad2(n){ return String(n).padStart(2,'0'); }
function icsLocal(d){ return d.getFullYear()+pad2(d.getMonth()+1)+pad2(d.getDate())+'T'+pad2(d.getHours())+pad2(d.getMinutes())+'00'; }
function icsUTC(d){ return d.getUTCFullYear()+pad2(d.getUTCMonth()+1)+pad2(d.getUTCDate())+'T'+pad2(d.getUTCHours())+pad2(d.getUTCMinutes())+pad2(d.getUTCSeconds())+'Z'; }
function icsEsc(v){ return String(v==null?'':v).replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n'); }
function icsFold(line){
  const enc = new TextEncoder();
  if(enc.encode(line).length <= 74) return line;
  let out = '', cur = '', bytes = 0, first = true;
  for(const ch of line){
    const b = enc.encode(ch).length;
    if(bytes + b > (first ? 74 : 73)){ out += (first ? '' : '\r\n ') + cur; first = false; cur = ''; bytes = 0; }
    cur += ch; bytes += b;
  }
  return out + (first ? '' : '\r\n ') + cur;
}
function icsWeekStart(){
  const d = new Date(); d.setHours(0,0,0,0);
  if(d.getDay()===5) d.setDate(d.getDate()+1);        // Friday: start with the coming week
  else d.setDate(d.getDate() - ((d.getDay()+1) % 7));  // weeks start on Saturday
  return d;
}
function buildICS(){
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//C.S Schedule//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:'+icsEsc('C.S Schedule '+group),'X-WR-TIMEZONE:Africa/Cairo'];
  const stamp = icsUTC(new Date()), base = icsWeekStart(); let count = 0;
  const official = missingView() ? [] : (GROUPS[group]||[]);
  for(let w=0; w<ICS_WEEKS; w++){
    const parity = (w%2===0) ? week : (week==='odd' ? 'even' : 'odd');
    DAYS.forEach(dd=>{
      const date = new Date(base); date.setDate(base.getDate() + w*7 + DAY_OFF[dd.key]);
      [...official.filter(l=>l.day===dd.key), ...engLectures(dd.key)].forEach(l=>{
        const r = (l.alt && parity==='even') ? {...l, type:l.alt.type, room:l.alt.room, staff:l.alt.staff, staffAr:l.alt.staffAr} : l;
        const mins = PMIN[l.p]; if(!mins) return;
        const ds = new Date(date); ds.setHours(0, mins[0], 0, 0);
        const de = new Date(date); de.setHours(0, mins[1], 0, 0);
        const title = disp(l,'title') + ' · ' + (lang==='ar' ? (TYPE_AR[r.type]||r.type) : r.type);
        const staff = lang==='ar' ? (r.staffAr||r.staff) : r.staff;
        lines.push('BEGIN:VEVENT', `UID:${group}-${l.day}-${l.p}-${l.code}-${icsLocal(ds)}@cs-schedule`, `DTSTAMP:${stamp}`, `DTSTART:${icsLocal(ds)}`, `DTEND:${icsLocal(de)}`, `SUMMARY:${icsEsc(title)}`);
        if(r.room && r.room!=='—') lines.push(`LOCATION:${icsEsc(r.room)}`);
        if(staff) lines.push(`DESCRIPTION:${icsEsc(staff)}`);
        lines.push('BEGIN:VALARM','TRIGGER:-PT15M','ACTION:DISPLAY',`DESCRIPTION:${icsEsc(title)}`,'END:VALARM','END:VEVENT');
        count++;
      });
    });
  }
  upcomingExams().forEach(e=>{
    const s = new Date(e.starts_at), en = new Date(examEnd(e));
    lines.push('BEGIN:VEVENT', `UID:exam-${e.id}@cs-schedule`, `DTSTAMP:${stamp}`, `DTSTART:${icsUTC(s)}`, `DTEND:${icsUTC(en)}`, `SUMMARY:${icsEsc(examTitle(e))}`);
    if(e.room) lines.push(`LOCATION:${icsEsc(e.room)}`);
    if(e.note) lines.push(`DESCRIPTION:${icsEsc(e.note)}`);
    lines.push('BEGIN:VALARM','TRIGGER:-P1D','ACTION:DISPLAY',`DESCRIPTION:${icsEsc(examTitle(e))}`,'END:VALARM','BEGIN:VALARM','TRIGGER:-PT2H','ACTION:DISPLAY',`DESCRIPTION:${icsEsc(examTitle(e))}`,'END:VALARM','END:VEVENT');
    count++;
  });
  lines.push('END:VCALENDAR');
  return { text: lines.map(icsFold).join('\r\n') + '\r\n', count };
}
function downloadICS(){
  const { text, count } = buildICS();
  if(!count){ showToast(t('icsEmpty')); return; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type:'text/calendar;charset=utf-8' }));
  a.download = `CS-Schedule-${group}.ics`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=> URL.revokeObjectURL(a.href), 4000);
  showToast(t('icsDone'));
}
$('ics-btn').addEventListener('click', downloadICS);

// ---- one-time onboarding (existing accounts confirm group + English day) ----
let obGroup = '', obEng = 'none', obShown = false;
function obKey(){ return profile ? 'cs_ob_'+profile.id : null; }
function onboardNeeded(){
  if(!profile) return false;
  const k = obKey();
  try{ if(localStorage.getItem(k)==='1') return false; }catch(e){}
  const meta = (session && session.user && session.user.user_metadata) || {};
  if(meta.onboarded){ try{ localStorage.setItem(k,'1'); }catch(e){} return false; }
  return parseInt(localStorage.getItem(k+'_skips')||'0',10) < 3;
}
function buildObGroups(){
  $('ob-group-grid').innerHTML = groupKeys().map(g=>`<button type="button" data-g="${g}" class="grp-opt${obGroup===g?' on':''}" style="direction:ltr">${g}</button>`).join('')
    + `<button type="button" data-g="" class="grp-opt grp-missing${obGroup===''?' on':''}">${t('schedMissing')}</button>`;
}
function paintObEng(){ document.querySelectorAll('#ob-eng-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===obEng)); }
function maybeOnboard(){
  if(obShown || !onboardNeeded() || gateNeeded()) return;
  obShown = true;
  obGroup = profile.group_key || ''; obEng = engDay();
  $('ob-group-wrap').style.display = profile.role==='student' ? 'block' : 'none';
  buildObGroups(); paintObEng();
  openSheet('onboard-sheet');
}
$('ob-group-grid').addEventListener('click', e=>{ const b=e.target.closest('.grp-opt'); if(!b) return; obGroup=b.dataset.g; buildObGroups(); });
$('ob-eng-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; obEng=b.dataset.v; paintObEng(); });
$('ob-skip').addEventListener('click', ()=>{
  const k = obKey(); if(k){ try{ localStorage.setItem(k+'_skips', String(parseInt(localStorage.getItem(k+'_skips')||'0',10)+1)); }catch(e){} }
  $('onboard-sheet').classList.remove('open');
});
$('ob-save').addEventListener('click', async ()=>{
  if(!profile) return;
  const btn = $('ob-save'); if(btn.disabled) return; btn.disabled = true; setTimeout(()=>{ btn.disabled=false; }, 800);
  const f = { name: profile.name, eng_day: obEng };
  const isStudent = profile.role==='student';
  if(isStudent) f.group_key = obGroup || null;
  const ok = await pushProfile(f);
  if(!ok) queueMutation({ table:'profile', fields:f });
  Object.assign(profile, f); jset('cs_profile', profile);
  try{ localStorage.setItem('cs_eng_day', obEng); localStorage.setItem(obKey(), '1'); }catch(e){}
  $('onboard-sheet').classList.remove('open');
  renderAccountBox();
  if(isStudent && f.group_key){ pickedGroup = false; applyGroup(f.group_key, false); }
  setL(); paintExams();
  showToast(t('accSaved'));
});

// ---- auth ------------------------------------------------------------------
async function startSession(s, fb){
  session = s; sessionNetErr = false; authChecked = true; netRetries = 0;
  profile = null;
  await loadProfile(fb);
}
async function doSignUp(name, phoneLocal, pass, g, eng){
  const phone = e164(phoneLocal);
  const { data, error } = await sb.auth.signUp({ phone, password:pass, options:{ data:{ name, group_key:g||'', eng_day:eng, onboarded:true } } });
  if(error) throw error;
  let s = data && data.session;
  if(!s){
    const r = await sb.auth.signInWithPassword({ phone, password:pass });
    if(r.error) throw r.error;
    s = r.data.session;
  }
  await startSession(s, { name, group_key:g||null, eng_day:eng });
  try{ localStorage.setItem('cs_ob_'+profile.id, '1'); }catch(e){}
}
async function doLogIn(phoneLocal, pass){
  const { data, error } = await sb.auth.signInWithPassword({ phone:e164(phoneLocal), password:pass });
  if(error) throw error;
  await startSession(data.session);
  try{ await sb.from('profiles').update({ last_login_at:new Date().toISOString() }).eq('id', session.user.id); }catch(e){}
}
async function doLogOut(){
  explicitLogout = true;
  try{ if(sb) await sb.auth.signOut({ scope:'local' }); }catch(e){}
  try{ Object.keys(localStorage).forEach(k=>{ if(/^sb-.*-auth-token/.test(k) || k==='cs_profile' || k==='cs_eng_day' || k==='cs_outbox' || k.indexOf('cs_ud_')===0) localStorage.removeItem(k); }); }catch(e){}
  session = null; profile = null; notesMap = {}; attMap = {}; personalEvents = []; pickedGroup = false;
  document.querySelectorAll('.sheet.open').forEach(x=>x.classList.remove('open'));
  renderAccountBox(); setL();
  explicitLogout = false;
  showToast(lang==='ar'?'خرجت من الحساب':'Logged out');
}

function renderAccountBox(){
  updateGate();
  const box = $('account-box'); if(!box) return;
  if(profile){
    const grp = profile.role!=='student' ? profile.role : (profile.group_key || '—');
    box.innerHTML = `<div class="flex items-center gap-2.5">
      <div class="avatar-circ">${esc((profile.name||'?').trim().charAt(0).toUpperCase())}</div>
      <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white truncate">${esc(profile.name)}</p>
      <p class="text-[10px] text-zinc-400" style="direction:ltr">${esc(localPhone(profile.phone))} · ${esc(grp)}${profile.role==='rep'&&profile.group_key?' · '+esc(profile.group_key):''}</p></div>
      <button id="acc-open-btn" class="px-3 py-1.5 rounded-full btn-acc text-[11px] font-bold shrink-0">${t('accSettings')}</button>
    </div>`;
    $('acc-open-btn').onclick = openAccountSheet;
  } else if(BACKEND_ON && navigator.onLine){
    box.innerHTML = `<p class="text-[11px] text-zinc-400 mb-2">${t('notLoggedIn')}</p>
      <button id="open-login-btn" class="w-full rounded-xl py-2.5 text-xs font-bold btn-acc">${t('loginCta')}</button>`;
    $('open-login-btn').onclick = ()=> openAuthSheet('login');
  } else {
    box.innerHTML = `<p class="text-[11px] text-zinc-500">${t('offlineNoAccount')}</p>`;
  }
  renderAdminLink();
}
function renderAdminLink(){
  let a = document.getElementById('admin-link-btn');
  if(profile && (profile.role==='admin' || profile.role==='rep')){
    if(!a){
      a = document.createElement('a'); a.id='admin-link-btn'; a.href='./admin.html'; a.target='_blank';
      a.className='w-full glass rounded-xl py-2.5 text-xs font-bold text-zinc-200 flex items-center justify-center gap-2 mt-2';
      a.innerHTML = `<svg class="ic text-[11px]"><use href="#i-sliders"/></svg><span>${t('openAdmin')}</span>`;
      $('account-box').insertAdjacentElement('afterend', a);
    }
  } else if(a){ a.remove(); }
}

// ---- account settings sheet ---------------------------------------------------
let accGroup = '', accEng = 'none';
function renderAccHead(){
  $('acc-head').innerHTML = `<div class="flex items-center gap-2.5">
    <div class="avatar-circ">${esc((profile.name||'?').trim().charAt(0).toUpperCase())}</div>
    <div class="flex-1 min-w-0"><p class="text-xs font-bold text-white truncate">${esc(profile.name)}</p>
    <p class="text-[10px] text-zinc-400" style="direction:ltr">${esc(localPhone(profile.phone))}${profile.role!=='student'?' · '+esc(profile.role):''}</p></div></div>`;
}
function buildAccGroup(){
  $('acc-group-grid').innerHTML = groupKeys().map(g=>`<button type="button" data-g="${g}" class="grp-opt${accGroup===g?' on':''}" style="direction:ltr">${g}</button>`).join('')
    + `<button type="button" data-g="" class="grp-opt grp-missing${accGroup===''?' on':''}">${t('schedMissing')}</button>`;
}
function paintAccEng(){ document.querySelectorAll('#acc-eng-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===accEng)); }
function openAccountSheet(){
  if(!profile){ if(navigator.onLine) openAuthSheet('login'); else showToast(t('errOffline')); return; }
  $('acc-name').value = profile.name||'';
  accGroup = profile.group_key||''; accEng = engDay();
  $('acc-err').textContent = ''; $('acc-pass').value = '';
  renderAccHead(); buildAccGroup(); paintAccEng();
  $('acc-group-wrap').style.display = profile.role==='student' ? 'block' : 'none';
  $('acc-wa-btn').href = waHrefProfile();
  openSheet('account-sheet');
}
$('acc-group-grid').addEventListener('click', e=>{ const b=e.target.closest('.grp-opt'); if(!b) return; accGroup=b.dataset.g; buildAccGroup(); });
$('acc-eng-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; accEng=b.dataset.v; paintAccEng(); });
async function pushProfile(f){
  if(!sb || !session || !navigator.onLine) return false;
  try{
    const base = { name:f.name };
    if(f.group_key!==undefined) base.group_key = f.group_key;
    const r = await sb.from('profiles').update(base).eq('id', session.user.id);
    if(r && r.error) return false;
    try{ await sb.from('profiles').update({ eng_day:f.eng_day }).eq('id', session.user.id); }catch(e){}
    try{ await sb.auth.updateUser({ data:{ name:f.name, group_key:(f.group_key!==undefined ? f.group_key : (profile&&profile.group_key)) || '', eng_day:f.eng_day, onboarded:true } }); }catch(e){}
    return true;
  }catch(e){ return false; }
}
$('acc-save').addEventListener('click', async ()=>{
  const btn = $('acc-save'); if(btn.disabled || !profile) return;
  const name = $('acc-name').value.trim();
  if(!name){ $('acc-err').textContent = t('errNameEmpty'); return; }
  btn.disabled = true; setTimeout(()=>{ btn.disabled=false; }, 800);
  const f = { name, eng_day:accEng };
  const isStudent = profile.role==='student';
  if(isStudent) f.group_key = accGroup || null;
  const ok = await pushProfile(f);
  if(!ok) queueMutation({ table:'profile', fields:f });
  Object.assign(profile, f);
  jset('cs_profile', profile);
  try{ localStorage.setItem('cs_eng_day', accEng); }catch(e){}
  document.querySelectorAll('.sheet.open').forEach(x=>x.classList.remove('open'));
  renderAccountBox();
  if(isStudent && f.group_key){ pickedGroup = false; applyGroup(f.group_key, false); }
  setL();
  showToast(t('accSaved'));
});
$('acc-pass-save').addEventListener('click', async ()=>{
  const p = $('acc-pass').value, err = $('acc-err'); err.textContent = '';
  if(p.length<6){ err.textContent = t('errPassShort'); return; }
  if(!navigator.onLine || !sb || !session){ err.textContent = t('errNeedNet'); return; }
  try{
    const { error } = await sb.auth.updateUser({ password:p });
    if(error) throw error;
    $('acc-pass').value = ''; showToast(t('accPassDone'));
  }catch(e){ err.textContent = authErrMsg(e, 'login'); }
});
$('acc-logout').addEventListener('click', doLogOut);

// ---- gate UI --------------------------------------------------------------------
function openAuthSheet(mode){ authGroup=''; authEng='none'; setAuthMode(mode||'login'); $('auth-err').textContent=''; $('auth-form').reset(); openSheet('auth-sheet'); }
function buildAuthGroups(){
  $('auth-group-grid').innerHTML = groupKeys().map(g=>`<button type="button" data-g="${g}" class="grp-opt${authGroup===g?' on':''}" style="direction:ltr">${g}</button>`).join('')
    + `<button type="button" data-g="NONE" class="grp-opt grp-missing${authGroup==='NONE'?' on':''}">${t('schedMissing')}</button>`;
}
function paintAuthEng(){ document.querySelectorAll('#auth-eng-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===authEng)); }
function updateAuthWa(){ $('auth-wa-btn').href = waHref($('auth-name').value.trim(), normDigits($('auth-phone').value.trim()), ''); }
function paintAuthMissing(){
  const show = ($('auth-form').dataset.mode==='signup') && authGroup==='NONE';
  $('auth-missing-note').style.display = show ? 'block' : 'none';
  if(show) updateAuthWa();
}
function setAuthMode(mode){
  mode = mode || 'login';
  document.querySelectorAll('#auth-mode-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===mode));
  const isSignup = mode==='signup';
  $('auth-name-row').style.display = isSignup?'flex':'none';
  $('auth-group-row').style.display = isSignup?'block':'none';
  $('auth-eng-row').style.display = isSignup?'block':'none';
  $('auth-submit').textContent = t(isSignup?'signupBtn':'loginBtn');
  $('auth-title').textContent = t(isSignup?'gateTitleSignup':'gateTitle');
  $('auth-sheet').querySelector('.gate-sub').textContent = t(isSignup?'gateSubSignup':'gateSub');
  $('auth-pass').autocomplete = isSignup ? 'new-password' : 'current-password';
  $('auth-form').dataset.mode = mode;
  if(isSignup){ buildAuthGroups(); paintAuthEng(); }
  paintAuthMissing();
}
function refreshAuthTexts(){
  if(!$('auth-form')) return;
  setAuthMode($('auth-form').dataset.mode || 'login');
  $('gate-wa-link').href = waHref('', '', '');
  $('gate-lang-btn').textContent = lang==='ar' ? 'EN' : 'AR';
}
$('auth-mode-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(b) setAuthMode(b.dataset.v); });
$('auth-pass-eye').addEventListener('click', ()=>{
  const inp=$('auth-pass'), show=inp.type==='password';
  inp.type = show?'text':'password';
  $('auth-pass-eye').innerHTML = `<svg class="ic"><use href="#${show?'i-eye-slash':'i-eye'}"/></svg>`;
});
$('auth-group-grid').addEventListener('click', e=>{ const b=e.target.closest('.grp-opt'); if(!b) return; authGroup=b.dataset.g; buildAuthGroups(); paintAuthMissing(); });
$('auth-eng-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; authEng=b.dataset.v; paintAuthEng(); });
$('auth-name').addEventListener('input', updateAuthWa);
$('auth-phone').addEventListener('input', updateAuthWa);
$('auth-form').addEventListener('submit', async ev=>{
  ev.preventDefault();
  const btn = $('auth-submit'); if(btn.disabled) return;
  const mode = $('auth-form').dataset.mode || 'login';
  const phone = normDigits($('auth-phone').value.trim()), pass = $('auth-pass').value;
  const errEl = $('auth-err'); errEl.textContent = '';
  if(!validPhone(phone)){ errEl.textContent=t('errPhone'); return; }
  if((pass||'').length<6){ errEl.textContent=t('errPassShort'); return; }
  let name = '';
  if(mode==='signup'){
    name = $('auth-name').value.trim();
    if(!name){ errEl.textContent=t('errFill'); return; }
    if(!authGroup){ errEl.textContent=t('errPickGroup'); return; }
  }
  if(!navigator.onLine){ errEl.textContent=t('errOffline'); return; }
  btn.disabled = true; const prevLbl = btn.textContent; btn.textContent = '…';
  try{
    if(!(await ensureSb())){ errEl.textContent = t('errService'); return; }
    if(mode==='signup'){
      await doSignUp(name, phone, pass, authGroup==='NONE' ? '' : authGroup, authEng);
      document.querySelectorAll('.sheet.open').forEach(x=>x.classList.remove('open'));
      renderAccountBox(); adoptProfileGroup(true); syncAll();
      showToast(lang==='ar'?'اتعمل الحساب، أهلاً بيك':'Account created, welcome');
    } else {
      await doLogIn(phone, pass);
      document.querySelectorAll('.sheet.open').forEach(x=>x.classList.remove('open'));
      renderAccountBox(); adoptProfileGroup(true); syncAll();
      showToast(lang==='ar'?'أهلاً بيك تاني':'Welcome back');
      setTimeout(maybeOnboard, 900);
    }
  }catch(e){ errEl.textContent = authErrMsg(e, mode); }
  finally{ btn.disabled = false; btn.textContent = prevLbl; }
});
// pick the message that matches what really went wrong
function authErrMsg(e, kind){
  const msg = ((e&&e.message)||'').toLowerCase(), code = (e&&e.code)||'', status = e && e.status;
  if(isNetErr(e)) return t('errOffline');
  if(code==='over_request_rate_limit' || code==='over_sms_send_rate_limit' || status===429 || /rate limit|too many/.test(msg)) return t('errRate');
  if(kind==='signup'){
    if(code==='user_already_exists' || code==='phone_exists' || /already (been )?registered|already exists/.test(msg)) return t('errExists');
    if(code==='weak_password' || /password/.test(msg)) return t('errPassShort');
    if(code==='phone_provider_disabled' || code==='sms_send_failed' || /provider|sms|twilio/.test(msg)) return t('errService');
    if(status>=500) return t('errGeneric');
    return t('errSignup');
  }
  if(code==='invalid_credentials' || /invalid login|invalid credentials/.test(msg)) return t('errLogin');
  if(code==='phone_not_confirmed' || /not confirmed/.test(msg)) return t('errService');
  if(status>=500) return t('errGeneric');
  return t('errLogin');
}

// ---- offline outbox (attendance / notes / personal events / profile edits queued while offline) ----
function outbox(){ return jget('cs_outbox', []); }
function queueMutation(job){
  let q = outbox();
  if(job.table==='profile') q = q.filter(j=>j.table!=='profile');
  q.push(job); jset('cs_outbox', q);
  if(navigator.onLine) flushOutbox();
}
let flushing = false;
async function flushOutbox(){
  if(flushing || !sb || !session || !navigator.onLine) return;
  const q = outbox(); if(!q.length) return;
  flushing = true;
  const remaining = [];
  const netFail = r => r && r.error && isNetErr(r.error);
  for(const job of q){
    try{
      let r = null;
      if(job.table==='attendance'){
        if(job.op==='upsert') r = await sb.from('attendance').upsert({ user_id:session.user.id, lecture_id:job.lecture_id, week_num:job.week_num, present:true }, {onConflict:'user_id,lecture_id,week_num'});
        else r = await sb.from('attendance').delete().match({ user_id:session.user.id, lecture_id:job.lecture_id, week_num:job.week_num });
      } else if(job.table==='notes'){
        if(job.op==='upsert') r = await sb.from('notes').upsert({ user_id:session.user.id, lecture_id:job.lecture_id, text:job.text, updated_at:new Date().toISOString() }, {onConflict:'user_id,lecture_id'});
        else r = await sb.from('notes').delete().match({ user_id:session.user.id, lecture_id:job.lecture_id });
      } else if(job.table==='personal_events'){
        if(job.op==='delete') r = await sb.from('personal_events').delete().eq('id', job.id);
        else r = await sb.from('personal_events').insert({ user_id:session.user.id, day:job.day, period:job.period, title:job.title, room:job.room, note:job.note });
      } else if(job.table==='profile'){
        const ok = await pushProfile(job.fields);
        if(!ok){ job.tries = (job.tries||0)+1; if(job.tries<3) remaining.push(job); }
      }
      if(netFail(r)) remaining.push(job);
    }catch(e){ remaining.push(job); }
  }
  const sig = j=>JSON.stringify(j), seen = new Set(q.map(sig));
  const added = outbox().filter(j=>!seen.has(sig(j)));
  jset('cs_outbox', remaining.concat(added));
  flushing = false;
}

// ---- notes / attendance / personal events: pull the signed-in user's own rows for this group
async function syncNotesAttendanceEvents(){
  if(!session || !sb || !navigator.onLine) return;
  await flushOutbox();
  try{
    const ids = (GROUPS[group]||[]).map(l=>l.id).filter(Boolean);
    if(ids.length){
      const n = await sb.from('notes').select('lecture_id,text').eq('user_id', session.user.id).in('lecture_id', ids);
      const a = await sb.from('attendance').select('lecture_id,week_num').eq('user_id', session.user.id).in('lecture_id', ids);
      if(!n.error && n.data){ notesMap = {}; n.data.forEach(x=> notesMap[x.lecture_id]=x.text); }
      if(!a.error && a.data){ attMap = {}; a.data.forEach(x=> attMap[`${x.lecture_id}-${x.week_num}`]=true); }
    }
    const ev = await sb.from('personal_events').select('*').eq('user_id', session.user.id);
    if(!ev.error && ev.data) personalEvents = ev.data;
    render();
  }catch(e){}
}
let noteTargetId = null;
function openNoteSheet(l){
  if(!requireAuth()) return;
  if(!l.id){ showToast(lang==='ar'?'استنى ثانية، بنزامن الجدول...':'One sec, syncing the schedule…'); return; }
  noteTargetId = l.id;
  $('note-for').textContent = disp(l,'title') + ' · ' + PERIODS[l.p];
  $('note-text').value = notesMap[l.id] || '';
  openSheet('note-sheet');
}
$('note-save').addEventListener('click', async ()=>{
  if($('note-save').disabled) return; $('note-save').disabled = true; setTimeout(()=>$('note-save').disabled=false, 800);
  const text = $('note-text').value.trim(), lid = noteTargetId;
  if(text) notesMap[lid]=text; else delete notesMap[lid];
  if(sb && session && navigator.onLine){
    try{
      if(text) await sb.from('notes').upsert({ user_id:session.user.id, lecture_id:lid, text, updated_at:new Date().toISOString() }, {onConflict:'user_id,lecture_id'});
      else await sb.from('notes').delete().match({ user_id:session.user.id, lecture_id:lid });
    }catch(e){ queueMutation({table:'notes', op:text?'upsert':'delete', lecture_id:lid, text}); }
  } else { queueMutation({table:'notes', op:text?'upsert':'delete', lecture_id:lid, text}); }
  document.querySelectorAll('.sheet.open').forEach(s=>s.classList.remove('open'));
  showToast(t('noteSaved')); render();
});
$('note-delete').addEventListener('click', ()=>{ $('note-text').value=''; $('note-save').click(); });

// ---- personal events -----------------------------------------------------
function openEventSheet(){
  if(!requireAuth()) return;
  $('event-title').value=''; $('event-room').value=''; $('event-note').value=''; $('event-err').textContent='';
  $('event-day').innerHTML = DAYS.map(d=>`<option value="${d.key}" ${d.key===activeDay.key?'selected':''}>${DAYNAMES[d.key][lang]}</option>`).join('');
  openSheet('event-sheet');
}
$('add-personal-btn').addEventListener('click', openEventSheet);
$('event-save').addEventListener('click', async ()=>{
  if($('event-save').disabled) return;
  const title=$('event-title').value.trim(), day=$('event-day').value, period=+$('event-period').value, room=$('event-room').value.trim(), note=$('event-note').value.trim();
  if(!title){ $('event-err').textContent=t('errFill'); return; }
  $('event-save').disabled = true; setTimeout(()=>$('event-save').disabled=false, 800);
  const row = { user_id:uid(), day, period, title, room, note };
  if(sb && session && navigator.onLine){
    try{ const { data, error } = await sb.from('personal_events').insert(row).select().single(); personalEvents.push(error?{...row,id:'local-'+Date.now()}:data); if(error) queueMutation({table:'personal_events', day, period, title, room, note}); }
    catch(e){ queueMutation({table:'personal_events', day, period, title, room, note}); personalEvents.push({...row, id:'local-'+Date.now()}); }
  } else { queueMutation({table:'personal_events', day, period, title, room, note}); personalEvents.push({...row, id:'local-'+Date.now()}); }
  document.querySelectorAll('.sheet.open').forEach(s=>s.classList.remove('open'));
  showToast(t('eventSaved')); render();
});
function personalCardHTML(ev){
  return `<article class="glass rounded-2xl p-4 relative z-10 personal-card" data-personal-id="${ev.id}">
    <div class="flex justify-between items-start relative z-10">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-2"><span class="chip" style="color:${CATS.personal.color};background:${CATS.personal.color}22">${t('personal')}</span><span class="text-[10px] text-zinc-500">${PERIODS[ev.period]}</span></div>
        <h4 class="text-sm font-bold text-white font-head">${ev.title}</h4>
        ${ev.note?`<p class="note-preview">${ev.note}</p>`:''}
      </div>
      <div class="text-center glass rounded-xl px-2.5 py-1.5 min-w-[58px] shrink-0">
        <span class="block text-[9px] text-zinc-400">${t('room')}</span>
        <span class="text-[11px] font-bold text-white" style="direction:ltr">${ev.room||'—'}</span>
      </div>
    </div>
    <div class="mt-3 pt-3 border-t border-white/10 flex justify-end relative z-10">
      <button class="personal-del text-[11px] font-bold text-zinc-400" data-id="${ev.id}">${t('deleteBtn')}</button>
    </div>
  </article>`;
}
document.body.addEventListener('click', async e=>{
  const b=e.target.closest('.personal-del'); if(!b) return;
  const id=b.dataset.id;
  personalEvents = personalEvents.filter(x=>x.id!==id);
  if(!String(id).startsWith('local-')){
    if(sb && session && navigator.onLine){ try{ const r = await sb.from('personal_events').delete().eq('id', id); if(r && r.error && isNetErr(r.error)) queueMutation({table:'personal_events', op:'delete', id}); }catch(e){ queueMutation({table:'personal_events', op:'delete', id}); } }
    else queueMutation({table:'personal_events', op:'delete', id});
  }
  render(); showToast(t('eventDeleted'));
});
document.body.addEventListener('click', e=>{
  const b=e.target.closest('.ann-dismiss'); if(!b) return;
  const dismissed = JSON.parse(localStorage.getItem('cs_dismissed_ann')||'[]');
  dismissed.push(b.dataset.id); localStorage.setItem('cs_dismissed_ann', JSON.stringify(dismissed));
  b.closest('[data-ann]').remove();
});
let lang = localStorage.getItem('a8_lang') || 'en';
let theme = localStorage.getItem('a8_theme') || 'dark';
let font = localStorage.getItem('a8_font') || 'plex';
const WALLS = {
  ocean:{file:'./bg.jpg',solid:'#0A1220',name:{en:'Ocean',ar:'المحيط'}},
  graphite:{file:'./bg-graphite.jpg',solid:'#050608',name:{en:'Graphite',ar:'جرافيت'}},
  wave:{file:'./bg-wave.jpg',solid:'#0A0D10',name:{en:'Great Wave',ar:'الموجة'}},
  smoke:{file:'./bg-smoke.jpg',solid:'#0B0B0D',name:{en:'Smoke',ar:'دخان'}},
  onyx:{file:'./bg-onyx.jpg',solid:'#000305',name:{en:'Onyx',ar:'أونيكس'}}
};
let wall = localStorage.getItem('a8_wall'); if(!WALLS[wall]) wall='ocean';
let defMins = localStorage.getItem('a8_mins') || '15';
let searching = false;
function t(k){ return I18N[lang][k]; }
let cairoLoaded=false;
function loadCairo(){ if(cairoLoaded) return; cairoLoaded=true; const l=document.createElement('link'); l.rel='stylesheet'; l.href='https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap'; document.head.appendChild(l); }
function applyChrome(){
  const de=document.documentElement;
  de.classList.toggle('light', theme==='light');
  de.classList.toggle('font-alt', font==='alt'); if(font==='alt') loadCairo();
  de.dataset.wall = wall;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', theme==='light' ? '#EEEFF1' : WALLS[wall].solid);
  document.querySelectorAll('.wall-opt').forEach(b=>b.classList.toggle('on', b.dataset.wall===wall));
  const gt = $('gate-theme-btn'); if(gt) gt.innerHTML = `<svg class="ic"><use href="#i-${theme==='light'?'moon':'sun'}"/></svg>`;
  document.querySelectorAll('#theme-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===theme));
  document.querySelectorAll('#font-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===font));
  document.querySelectorAll('#mins-seg button').forEach(b=>b.classList.toggle('on', b.dataset.v===defMins));
}
function setLang(l){
  lang=l; localStorage.setItem('a8_lang',l);
  document.documentElement.lang=l; document.documentElement.dir = l==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=> el.innerHTML = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el=> el.placeholder = t(el.dataset.i18nPh));
  $('lang-btn').textContent = l==='ar' ? 'EN' : 'AR';
  buildWallGrid(); buildTabs(); buildLegend(); updateWeekCard(); render(); calcNext();
  refreshAuthTexts(); renderAccountBox(); paintLinks(); applySettings(); paintExams();
}
function isoWeekOdd(){ const d=new Date(); const onejan=new Date(d.getFullYear(),0,1); const wk=Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7); return wk%2===1; }
// a8_week used to be one shared "odd"/"even" string for every group. It's now a {group: "odd"|"even"} map
// so switching groups doesn't leak one group's week choice into another. Old plain-string values are
// migrated in as the previously-active group's setting instead of being discarded.
let weekMap = (function(){
  const raw = localStorage.getItem('a8_week'); if(!raw) return {};
  try{ const parsed = JSON.parse(raw); if(parsed && typeof parsed==='object' && !Array.isArray(parsed)) return parsed; }catch(e){}
  if(raw==='odd'||raw==='even'){ const m={}; m[localStorage.getItem('a8_group')||'GA8']=raw; localStorage.setItem('a8_week', JSON.stringify(m)); return m; }
  return {};
})();
let week = weekMap[group] || (isoWeekOdd() ? 'odd':'even');
function applyWeekUI(){ document.querySelectorAll('.w-switch').forEach(b=> b.classList.toggle('on', b.dataset.w===week)); }
$('week-switch').addEventListener('click', e=>{ const b=e.target.closest('.w-switch'); if(!b) return; week=b.dataset.w; weekMap[group]=week; localStorage.setItem('a8_week',JSON.stringify(weekMap)); applyWeekUI(); render(); calcNext(); });

function shortTitle(code){ const cc = course(code); const full = lang==='ar'?cc.ar:cc.en; const i=full.indexOf(' – '); return i>=0?full.slice(i+3):full; }
function updateWeekCard(){
  const alts = L.filter(l=>l.alt);
  const has = alts.length>0;
  $('week-card').style.display = has ? 'flex' : 'none';
  $('legend-note').style.display = has ? '' : 'none';
  if(!has) return;
  const tn = t2 => lang==='ar' ? (TYPE_AR[t2]||t2) : t2;
  $('week-desc').textContent = alts.map(l=> lang==='ar'
    ? `بيبدّل ${shortTitle(l.code)} ${DAYNAMES[l.day].ar} بين ${tn(l.type)} و${tn(l.alt.type)}`
    : `Switches ${DAYNAMES[l.day].en} ${shortTitle(l.code)} between ${tn(l.type)} and ${tn(l.alt.type)}`).join(' · ');
}
function resolvedLecture(l){ return (l.alt && week==='even') ? {...l, type:l.alt.type, cat:l.alt.cat, room:l.alt.room, staff:l.alt.staff, staffAr:l.alt.staffAr} : l; }
function disp(l,f){ if(f==='title'){ const cc = course(l.code); return lang==='ar'?cc.ar:cc.en; } if(f==='staff') return lang==='ar'?l.staffAr:l.staff; return lang==='ar'?(TYPE_AR[l.type]||l.type):l.type; }

function buildLegend(){
  $('legend').innerHTML = Object.entries(CATS).map(([k,v])=>{
    const label = lang==='ar' ? (k==='exercise'?'تمرين / سكشن':k==='community'?'نشاط طلابي':k==='lecture'?'محاضرة':'معمل') : (k==='exercise'?'Exercise / Section':k==='community'?'Community Activity':k[0].toUpperCase()+k.slice(1));
    return `<span class="chip glass shrink-0" style="color:${v.color}"><span class="inline-block w-1.5 h-1.5 rounded-full ml-1" style="background:${v.color}"></span>${label}</span>`;
  }).join('');
}
let activeDay = DAYS.find(d=>d.idx===new Date().getDay()) || DAYS[0];
function buildTabs(){ $('day-tabs').innerHTML = DAYS.map(d=>{ const has=L.some(l=>l.day===d.key); return `<button data-day="${d.key}" class="day-tab shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition glass" style="${has?'':'opacity:.45'}">${DAYNAMES[d.key][lang]}</button>`; }).join(''); paintTabs(); }
function paintTabs(){ document.querySelectorAll('.day-tab').forEach(b=> b.classList.toggle('on', b.dataset.day===activeDay.key)); }
$('day-tabs').addEventListener('click', e=>{ const b=e.target.closest('.day-tab'); if(!b) return; activeDay=DAYS.find(d=>d.key===b.dataset.day); searching=false; $('search-row').style.display='none'; $('search-input').value=''; paintTabs(); render(); });

const savedReminders = JSON.parse(localStorage.getItem('a8_reminders')||'{}');
const savedAttendance = JSON.parse(localStorage.getItem('a8_att')||'{}');
(function migrateOldKeys(){
  const dayRe = /^(sat|sun|mon|tue|wed|thu)-/;
  const colonRe = /^([A-Za-z0-9]+):(sat|sun|mon|tue|wed|thu)-/;
  [[savedReminders,'a8_reminders'],[savedAttendance,'a8_att']].forEach(([obj,key])=>{
    let changed=false;
    Object.keys(obj).forEach(k=>{
      let nk=null;
      if(colonRe.test(k)) nk = k.replace(colonRe, (m,g,d)=>`${g}-${d}-`);
      else if(dayRe.test(k)) nk = `GA8-${k}`;
      if(nk && nk!==k && !(nk in obj)){ obj[nk]=obj[k]; delete obj[k]; changed=true; }
    });
    if(changed) localStorage.setItem(key, JSON.stringify(obj));
  });
})();
function isoWeekNum(d){ const onejan=new Date(d.getFullYear(),0,1); return d.getFullYear()*100+Math.ceil((((d-onejan)/86400000)+onejan.getDay()+1)/7); }
function nowInfo(l){
  const d=new Date(); const today=DAYS.find(dd=>dd.idx===d.getDay());
  if(!today || today.key!==l.day) return null;
  const cur=d.getHours()*60+d.getMinutes()+d.getSeconds()/60; const [s,e]=PMIN[l.p];
  if(cur<s||cur>=e) return null;
  return {pct:Math.round(((cur-s)/(e-s))*100), left:Math.max(1,Math.ceil(e-cur))};
}
function fmtLeft(m){ const h=Math.floor(m/60), r=m%60; return lang==='ar' ? `متبقي ${h?h+'س ':''}${r}د` : `${h?h+'h ':''}${r}m left`; }
function paintLive(){ document.querySelectorAll('.now-row').forEach(r=>{ const i=nowInfo({day:r.dataset.day,p:+r.dataset.p}); if(!i) return; r.querySelector('i').style.width=i.pct+'%'; r.querySelector('.now-left').textContent=fmtLeft(i.left); }); }
function liveSig(){ return L.filter(l=>nowInfo(l)).map(l=>l.day+l.p).join(','); }
let lastSig='';
function cardHTML(l, showDay){
  const c=CATS[l.cat]; const id=`${group}-${l.day}-${l.p}-${l.code}`; const isSet=!!savedReminders[id]; const live=nowInfo(l);
  const wk = isoWeekNum(new Date());
  const present = l.id ? !!attMap[`${l.id}-${wk}`] : savedAttendance[id]===wk;
  const note = l.id ? notesMap[l.id] : null;
  return `<article class="glass rounded-2xl p-4 relative z-10 ${live?'now-card':''}" style="${live?'border-width:1.5px':''}">
    <div class="flex justify-between items-start relative z-10">
      <div class="flex-1">
        <div class="flex items-center gap-2 gap-y-1.5 mb-2 flex-wrap">
          <span class="chip" style="color:${c.color};background:${c.color}22">${disp(l,'type')}</span>
          <span class="text-[10px] text-zinc-500">${PERIODS[l.p]}${showDay?' · '+DAYNAMES[l.day][lang]:''}</span>
          ${live?`<span class="chip chip-now">${t('now')}</span>`:''}
        </div>
        <h4 class="text-sm font-bold text-white font-head">${disp(l,'title')}</h4>
        ${l.staff?`<p class="text-[11px] text-zinc-400 flex items-center gap-1.5 mt-2"><svg class="ic text-[10px]"><use href="#i-${c.icon}"/></svg>${disp(l,'staff')}</p>`:''}
        ${note?`<p class="note-preview">${note.replace(/</g,'&lt;')}</p>`:''}
        ${live?`<div class="now-row flex items-center gap-2.5 mt-2.5" data-day="${l.day}" data-p="${l.p}"><div class="now-bar flex-1"><i style="width:${live.pct}%"></i></div><span class="now-left text-[10px] font-semibold text-zinc-300 whitespace-nowrap">${fmtLeft(live.left)}</span></div>`:''}
      </div>
      <div class="text-center glass rounded-xl px-2.5 py-1.5 min-w-[58px] shrink-0">
        <span class="block text-[9px] text-zinc-400" data-i18n="room">${t('room')}</span>
        <span class="text-[11px] font-bold text-white" style="direction:ltr">${l.room}</span>
      </div>
    </div>
    <div class="mt-4 pt-3 border-t border-white/10 flex items-center gap-2.5 relative z-10">
      <button data-id="${id}" data-label="${disp(l,'title').replace(/"/g,'&quot;')}" class="reminder-btn flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold ${isSet?'text-white':'text-zinc-400'}">
        <svg class="ic text-xs"><use href="#${isSet?'i-bell':'r-bell'}"/></svg><span>${isSet?t('remindOn'):defMins+(lang==='ar'?' د قبلها':'m before')}</span>
      </button>
      ${l.isEng?'':`<button data-lid="${l.id||''}" title="${t('noteTitle')}" class="note-btn w-9 h-9 rounded-full glass flex items-center justify-center relative ${note?'text-white':'text-zinc-500'}"><svg class="ic text-xs"><use href="#i-pen"/></svg>${note?'<span class="badge-dot"></span>':''}</button>`}
      <button data-id="${id}" data-lid="${l.id||''}" title="${t('attendance')}" class="att-btn w-9 h-9 rounded-full glass flex items-center justify-center ${present?'text-emerald-300':'text-zinc-500'}"><svg class="ic text-xs"><use href="#i-check"/></svg></button>
    </div>
  </article>`;
}
function gapPill(a,b){
  const ea=PMIN[a.p][1], sb=PMIN[b.p][0]; const g=sb-ea; if(g<=0) return '';
  return `<div class="gap-pill flex items-center justify-center"><span class="chip glass text-zinc-500">${t('gap')} · ${g}${lang==='ar'?'د':'m'}</span></div>`;
}
function render(){
  lastSig=liveSig();
  const list=$('lecture-list'); list.style.opacity=0; list.style.transform='translateY(6px)';
  setTimeout(()=>{
    let items;
    if(searching){
      const q=$('search-input').value.trim().toLowerCase();
      items = q ? L.map(resolvedLecture).filter(l=> (course(l.code).en+course(l.code).ar+l.staff+(l.staffAr||'')).toLowerCase().includes(q)) : [];
      list.innerHTML = items.length? items.map(l=>cardHTML(l,true)).join('') : `<div class="glass rounded-2xl p-8 text-center"><p class="text-sm text-zinc-300 font-semibold">${t(q?'noResults':'searchPh')}</p></div>`;
    } else {
      const official = L.filter(l=>l.day===activeDay.key).map(resolvedLecture);
      const eng = engLectures(activeDay.key);
      // personal items are tied to the user's own group view, so they don't bleed
      // into another group's schedule when someone is just browsing it
      const showPersonal = !profile || !profile.group_key || profile.group_key===group;
      const personal = showPersonal ? personalEvents.filter(e=>e.day===activeDay.key).map(e=>({...e, p:e.period, isPersonal:true})) : [];
      items = [...official, ...eng, ...personal].sort((a,b)=>a.p-b.p);
      const miss = missingView();
      if(items.length===0){ list.innerHTML = miss ? missingCardHTML() : `<div class="glass rounded-2xl p-8 text-center no-class"><svg class="ic text-2xl text-zinc-400 mb-2"><use href="#i-mug-hot"/></svg><p class="text-sm text-zinc-300 font-semibold">${t('noClass')}</p></div>`; }
      else {
        let html = miss ? missingCardHTML() : ''; items.forEach((l,i)=>{
          html += l.isPersonal ? personalCardHTML(l) : cardHTML(l,false);
          if(i<items.length-1 && !l.isPersonal && !items[i+1].isPersonal) html+=gapPill(items[i],items[i+1]);
        });
        list.innerHTML = html;
      }
      buildStats();
    }
    saveUserCache();
    requestAnimationFrame(()=>{ list.style.opacity=1; list.style.transform='translateY(0)'; });
  }, 100);
}
function buildStats(){
  const items = L.filter(l=>l.day===activeDay.key).map(resolvedLecture);
  const mins = items.reduce((s,l)=> s+(PMIN[l.p][1]-PMIN[l.p][0]),0);
  const hrs = (mins/60).toFixed(1).replace('.0','');
  let busiest={key:null,cnt:-1};
  DAYS.forEach(d=>{ const n=L.filter(l=>l.day===d.key).length; if(n>busiest.cnt){busiest={key:d.key,cnt:n};} });
  const hoursLabel = !busiest.key ? '' : lang==='ar' ? `${DAYNAMES[activeDay.key].ar}: ${hrs} ساعة` : `${DAYNAMES[activeDay.key].en}: ${hrs}h`;
  if(!busiest.key){ $('stats-line').textContent=''; return; }
  $('stats-line').textContent = items.length ? `${hoursLabel}  ·  ${t('busiest')}: ${DAYNAMES[busiest.key][lang]}` : `${t('busiest')}: ${DAYNAMES[busiest.key][lang]}`;
}

document.body.addEventListener('click', e=>{
  const b=e.target.closest('.att-btn'); if(!b || b.dataset.busy) return;
  b.dataset.busy='1'; setTimeout(()=>delete b.dataset.busy, 600);
  const id=b.dataset.id, lid=b.dataset.lid, wk=isoWeekNum(new Date());
  if(lid){
    if(!requireAuth()) return;
    const key=`${lid}-${wk}`; const willBePresent=!attMap[key];
    if(willBePresent) attMap[key]=true; else delete attMap[key];
    const job = {table:'attendance', op:willBePresent?'upsert':'delete', lecture_id:lid, week_num:wk};
    if(sb && session && navigator.onLine){
      (async ()=>{
        try{
          const r = willBePresent ? await sb.from('attendance').upsert({user_id:session.user.id, lecture_id:lid, week_num:wk, present:true}, {onConflict:'user_id,lecture_id,week_num'})
                                  : await sb.from('attendance').delete().match({user_id:session.user.id, lecture_id:lid, week_num:wk});
          if(r && r.error && isNetErr(r.error)) queueMutation(job);
        }catch(e){ queueMutation(job); }
      })();
    } else queueMutation(job);
  } else {
    if(savedAttendance[id]===wk) delete savedAttendance[id]; else savedAttendance[id]=wk;
    localStorage.setItem('a8_att', JSON.stringify(savedAttendance));
  }
  render();
});
document.body.addEventListener('click', e=>{
  const b=e.target.closest('.note-btn'); if(!b) return;
  const lid=b.dataset.lid;
  if(!lid){ showToast(lang==='ar'?'استنى ثانية، بنزامن الجدول...':'One sec, syncing the schedule…'); return; }
  const base = (GROUPS[group]||[]).find(x=>x.id===lid);
  if(base) openNoteSheet(resolvedLecture(base));
});

document.body.addEventListener('click', async e=>{
  const btn = e.target.closest('.reminder-btn'); if(!btn) return;
  if('Notification' in window && Notification.permission!=='granted'){
    const p = await Notification.requestPermission();
    if(p!=='granted'){ showToast(lang==='ar'?'لازم تسمح بالإشعارات الأول':'Please allow notifications first'); return; }
  }
  const id=btn.dataset.id, wasOn=!!savedReminders[id];
  savedReminders[id]=!wasOn; localStorage.setItem('a8_reminders', JSON.stringify(savedReminders));
  render();
  if(wasOn){ showToast(lang==='ar'?'اتلغى التنبيه':'Reminder cleared', {label:t('undo'), cb:()=>{ savedReminders[id]=true; localStorage.setItem('a8_reminders',JSON.stringify(savedReminders)); render(); }}); }
  else { showToast(lang==='ar'?`تم ضبط تنبيه لـ ${btn.dataset.label}`:`Reminder set for ${btn.dataset.label}`); }
});

function showToast(msg, action){
  const el=$('toast'), a=$('toast-action'); $('toast-msg').textContent=msg; el.style.opacity=1;
  if(action){ a.style.display='inline'; a.textContent=action.label; a.onclick=()=>{ action.cb(); el.style.opacity=0; }; }
  else a.style.display='none';
  clearTimeout(window._tt); window._tt=setTimeout(()=>el.style.opacity=0, 3200);
}

let nextLecCache=null;
function calcNext(){
  const now=new Date(); const curDay=now.getDay(); const curMin=now.getHours()*60+now.getMinutes();
  let next=null, dayKey='';
  for(let off=0; off<=7; off++){
    const checkIdx=(curDay+off)%7; const d=DAYS.find(dd=>dd.idx===checkIdx); if(!d) continue;
    const todays = [...L.filter(l=>l.day===d.key), ...engLectures(d.key)].map(resolvedLecture).sort((a,b)=>a.p-b.p);
    for(const l of todays){ if(off>0 || PMIN[l.p][0]>curMin){ next=l; dayKey=d.key; nextLecCache={off,startMin:PMIN[l.p][0]}; break; } }
    if(next) break;
  }
  if(!next){ nextLecCache=null; ['next-lec-title','next-lec-doc','next-lec-hall','next-lec-meta','next-lec-countdown'].forEach(i=>$(i).textContent='--'); $('next-lec-type').textContent=''; return; }
  const c=CATS[next.cat];
  $('next-lec-title').textContent = disp(next,'title');
  $('next-lec-doc').textContent = disp(next,'staff') || '—';
  $('next-lec-hall').textContent = next.room;
  $('next-lec-meta').textContent = DAYNAMES[dayKey][lang]+' · '+PERIODS[next.p];
  $('next-lec-type').textContent = disp(next,'type'); $('next-lec-type').style.color=c.color; $('next-lec-type').style.background=c.color+'22';
  tickCountdown();
}
function tickCountdown(){
  if(!nextLecCache) return;
  const now=new Date(); const curMin=now.getHours()*60+now.getMinutes();
  const totalMin = nextLecCache.off*1440 + nextLecCache.startMin - curMin - now.getSeconds()/60;
  if(totalMin<=0 && !tickCountdown._re){ tickCountdown._re=true; calcNext(); tickCountdown._re=false; return; }
  const h=Math.floor(totalMin/60), m=Math.floor(totalMin%60);
  $('next-lec-countdown').innerHTML = `<svg class="ic ml-1"><use href="#r-clock"/></svg>${h>0?h+(lang==='ar'?'س ':'h '):''}${m}${lang==='ar'?'د':'m'}`;
}
function tick(){ tickCountdown(); const sg=liveSig(); if(sg!==lastSig) render(); else paintLive(); }
setInterval(tick, 30000);
document.addEventListener('visibilitychange', ()=>{ document.documentElement.classList.toggle('bg-paused', document.hidden); if(!document.hidden) tick(); });

// search
$('search-btn').addEventListener('click', ()=>{ searching=!searching; $('search-row').style.display = searching?'flex':'none'; if(searching){ $('search-input').focus(); } else { $('search-input').value=''; } render(); });
$('search-input').addEventListener('input', render);

// sheets
function openSheet(id){
  openGroupPop(false);
  if(gateNeeded() && id!=='auth-sheet') return;
  document.querySelectorAll('.sheet.open').forEach(s=>{ if(s.id!=='auth-sheet' || id==='auth-sheet') s.classList.remove('open'); });
  $(id).classList.add('open');
}
$('settings-btn').addEventListener('click', ()=>openSheet('settings-sheet'));
$('share-tools-btn').addEventListener('click', ()=>openSheet('share-sheet'));
$('gpa-btn').addEventListener('click', ()=>openSheet('gpa-sheet'));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click', e=> e.target.closest('.sheet').classList.remove('open')));
$('gate-theme-btn').addEventListener('click', ()=>{ theme = theme==='light' ? 'dark' : 'light'; localStorage.setItem('a8_theme',theme); applyChrome(); });
$('gate-lang-btn').addEventListener('click', ()=> setLang(lang==='en'?'ar':'en'));
$('theme-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; theme=b.dataset.v; localStorage.setItem('a8_theme',theme); applyChrome(); });
$('font-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; font=b.dataset.v; localStorage.setItem('a8_font',font); applyChrome(); });
$('mins-seg').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; defMins=b.dataset.v; localStorage.setItem('a8_mins',defMins); applyChrome(); render(); });
async function fireTest(){
  if(!('Notification' in window)){ showToast(lang==='ar'?'المتصفح مش بيدعم الإشعارات':'Notifications not supported'); return; }
  const p = await Notification.requestPermission();
  if(p==='granted'){
    if(navigator.serviceWorker?.controller){ navigator.serviceWorker.ready.then(r=>r.showNotification('C.S Schedule 🔔',{body:lang==='ar'?'التنبيهات شغالة تمام':'Notifications are working',icon:'./icon.png',vibrate:[120,60,120]})); }
    else new Notification('C.S Schedule 🔔',{body:lang==='ar'?'التنبيهات شغالة تمام':'Notifications are working',icon:'./icon.png'});
    showToast(lang==='ar'?'التنبيهات مفعّلة':'Notifications enabled');
  } else showToast(lang==='ar'?'الإذن مرفوض':'Permission denied');
}
$('settings-test-btn').addEventListener('click', fireTest);

// group picker: circle in the top dock -> pick -> closes, circle shows the chosen group
function groupKeys(){ return Object.keys(GROUPS).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})); }
function buildGroupPop(){ $('group-grid').innerHTML = groupKeys().map(g=>`<button data-g="${g}" class="grp-opt${g===group?' on':''}" style="direction:ltr">${g}</button>`).join(''); }
function paintGroup(){
  $('group-btn-txt').textContent = missingView() ? '—' : group;
  document.querySelectorAll('.grp-opt').forEach(b=>b.classList.toggle('on', b.dataset.g===group));
  document.title = `C.S Schedule | ${group} Weekly Timetable`;
}
function openGroupPop(open){ $('group-pop').classList.toggle('open', open); $('group-btn').setAttribute('aria-expanded', String(open)); }
function applyGroup(g, announce){
  openGroupPop(false);
  if(!GROUPS[g]) return;
  pickedGroup = true;
  if(g===group){ setL(); return; }
  group=g; localStorage.setItem('a8_group', g);
  week = weekMap[group] || (isoWeekOdd() ? 'odd':'even'); applyWeekUI();
  notesMap={}; attMap={}; personalEvents=[]; loadUserCache();
  searching=false; $('search-row').style.display='none'; $('search-input').value='';
  setL(); paintLinks(); paintExams();
  if(announce) showToast(`${t('switchedTo')} ${g}`);
  if(BACKEND_ON && sb){ syncGroup(g); syncLinksAndAnnouncements(); if(session) syncNotesAttendanceEvents(); }
}
$('group-btn').addEventListener('click', ()=>{ document.querySelectorAll('.sheet.open').forEach(x=>x.classList.remove('open')); openGroupPop(!$('group-pop').classList.contains('open')); });
$('group-grid').addEventListener('click', e=>{ const b=e.target.closest('.grp-opt'); if(b) applyGroup(b.dataset.g, true); });
$('group-pop').addEventListener('click', e=>{ if(e.target.hasAttribute('data-pop-close')) openGroupPop(false); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') openGroupPop(false); });
buildGroupPop();

// wallpaper themes (fixed background layer, accent colours follow the wallpaper)
function buildWallGrid(){ $('wall-grid').innerHTML = Object.entries(WALLS).map(([id,w])=>`<button data-wall="${id}" aria-label="${w.name[lang]}" class="wall-opt${id===wall?' on':''}" style="background-image:url(./th-${id}.jpg)"><span>${w.name[lang]}</span></button>`).join(''); }
function setWall(id){
  if(!WALLS[id] || id===wall) return;
  wall=id; localStorage.setItem('a8_wall', id);
  const bg=$('bg'); bg.style.opacity=0;
  const img=new Image(); const loaded=new Promise(r=>{ img.onload=img.onerror=r; }); img.src=WALLS[id].file;
  Promise.all([loaded, new Promise(r=>setTimeout(r,200))]).then(()=>{ applyChrome(); requestAnimationFrame(()=>{ bg.style.opacity=1; }); });
}
$('wall-grid').addEventListener('click', e=>{ const b=e.target.closest('.wall-opt'); if(b) setWall(b.dataset.wall); });

$('lang-btn').addEventListener('click', ()=> setLang(lang==='en'?'ar':'en'));
$('today-shortcut-btn').addEventListener('click', ()=>{ const d=DAYS.find(dd=>dd.idx===new Date().getDay())||DAYS[0]; activeDay=d; searching=false; $('search-row').style.display='none'; paintTabs(); render(); showToast(lang==='ar'?'اتنقلت لجدول النهارده':'Jumped to today'); });
$('share-schedule-btn').addEventListener('click', ()=>{ if(navigator.share){ navigator.share({title:'C.S Schedule', text:`${group} weekly timetable`, url:location.href}).catch(()=>{}); } else { navigator.clipboard.writeText(location.href); showToast(lang==='ar'?'اتنسخ الرابط':'Link copied'); } });
$('dock-notify-btn').addEventListener('click', fireTest);

window.addEventListener('online', ()=> $('offline-chip').style.display='none');
window.addEventListener('offline', ()=> $('offline-chip').style.display='block');
if(!navigator.onLine) $('offline-chip').style.display='block';

let deferredPrompt;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
if(isIOS && !isStandalone){ $('pwa-install-banner').style.display='block'; $('install-btn').style.display='none'; $('install-desc').textContent = t('iosInstall'); }
else { window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; $('pwa-install-banner').style.display='block'; }); $('install-btn').addEventListener('click', async ()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; $('pwa-install-banner').style.display='none'; }); }
if('serviceWorker' in navigator){ window.addEventListener('load', ()=> navigator.serviceWorker.register('./sw.js').catch(()=>{})); }

// share & export
$('native-share-btn').addEventListener('click', ()=>{ if(navigator.share){ navigator.share({title:'C.S Schedule', text:`${group} weekly timetable`, url:location.href}).catch(()=>{}); } else showToast(lang==='ar'?'المشاركة مش متاحة هنا':'Sharing not available here'); });
$('copy-link-btn').addEventListener('click', ()=>{ navigator.clipboard.writeText(location.href); showToast(lang==='ar'?'اتنسخ الرابط':'Link copied'); });
// lazy-load heavy libs only when actually needed (keeps first load light)
function loadScript(src){ return new Promise((res,rej)=>{ if(document.querySelector(`script[src="${src}"]`)) return res(); const s=document.createElement('script'); s.src=src; s.onload=res; s.onerror=rej; document.head.appendChild(s); }); }
$('qr-btn').addEventListener('click', async ()=>{
  const box=$('qr-box'); box.innerHTML=''; box.style.display='flex';
  if(!window.QRCode){ try{ await loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'); }catch(e){ showToast(lang==='ar'?'تعذر تحميل QR':'Could not load QR'); return; } }
  new QRCode(box, {text: location.href, width:160, height:160, colorDark:'#111', colorLight:'#fff'});
});
$('save-image-btn').addEventListener('click', async ()=>{
  showToast(lang==='ar'?'بنجهز الصورة...':'Preparing image…');
  try{
    if(!window.html2canvas) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    const canvas = await html2canvas(document.querySelector('main'), {backgroundColor:'#050506'});
    const a=document.createElement('a'); a.download='cs-schedule.png'; a.href=canvas.toDataURL('image/png'); a.click();
  } catch(e){ showToast(lang==='ar'?'حصل خطأ في التصدير':'Export failed'); }
});
$('print-btn').addEventListener('click', ()=>{
  const wrap=document.createElement('div'); wrap.id='print-week';
  let html = `<h1>C.S Schedule — ${group}</h1>`;
  DAYS.forEach(d=>{
    const items=L.filter(l=>l.day===d.key).sort((a,b)=>a.p-b.p).map(resolvedLecture); if(!items.length) return;
    html += `<h2>${DAYNAMES[d.key][lang]}</h2><table><tr><th>Time</th><th>Course</th><th>Type</th><th>Room</th><th>Staff</th></tr>`;
    items.forEach(l=> html += `<tr><td>${PERIODS[l.p]}</td><td>${disp(l,'title')}</td><td>${disp(l,'type')}</td><td>${l.room}</td><td>${disp(l,'staff')||''}</td></tr>`);
    html += '</table>';
  });
  wrap.innerHTML = html; document.body.appendChild(wrap); window.print(); setTimeout(()=> wrap.remove(), 500);
});

// ---- full-week grid as a single branded image (any group, all days at once) ----
function weekGridHTML(g){
  const rows = GROUPS[g] || [];
  const byCell = {};
  rows.forEach(l=>{ const key=l.day+'-'+l.p; (byCell[key]=byCell[key]||[]).push(l); });
  const cellHTML = (l)=>{
    const base = resolvedLecture===resolvedLecture ? l : l; // keep both sessions visible on the poster, not just this week's
    const parts = [];
    const mk = (ll, tag)=>{
      const c = CATS[ll.cat] || CATS.lecture;
      return `<div style="background:${c.color}26;border:1px solid ${c.color}55;border-radius:10px;padding:7px 8px;margin-bottom:4px;">
        ${tag?`<div style="font-size:8px;font-weight:800;letter-spacing:.04em;color:${c.color};text-transform:uppercase;margin-bottom:2px;">${tag}</div>`:''}
        <div style="font-size:10.5px;font-weight:800;color:#111;line-height:1.25;">${disp(ll,'title')}</div>
        <div style="font-size:8.5px;color:#444;margin-top:2px;">${disp(ll,'type')} · ${ll.room}</div>
        ${ll.staff?`<div style="font-size:8px;color:#666;margin-top:2px;">${disp(ll,'staff')}</div>`:''}
      </div>`;
    };
    if(l.alt){ parts.push(mk(l, lang==='ar'?'فردي':'ODD')); parts.push(mk({...l,...l.alt}, lang==='ar'?'زوجي':'EVEN')); }
    else parts.push(mk(l,''));
    return parts.join('');
  };
  const dayLabel = d=> DAYNAMES[d][lang];
  const head = `<div style="display:grid;grid-template-columns:86px repeat(4,1fr);">
    <div style="background:#0A1220;color:#fff;font-size:10px;font-weight:800;padding:10px 8px;border:1px solid #0A1220;display:flex;align-items:center;">${lang==='ar'?'اليوم':'Day'}</div>
    ${[1,2,3,4].map(p=>`<div style="background:#0A1220;color:#fff;text-align:center;padding:8px 6px;border:1px solid #0A1220;"><div style="font-size:10.5px;font-weight:800;">${lang==='ar'?'الفترة '+p:'Period '+p}</div><div style="font-size:8.5px;color:#9db0cc;margin-top:1px;">${PERIODS[p]}</div></div>`).join('')}
  </div>`;
  const body = DAYS.map(d=>{
    const cells = [1,2,3,4].map(p=>{
      const items = byCell[d.key+'-'+p];
      return `<div style="background:#fff;border:1px solid #e3e5ea;padding:6px;min-height:58px;">${items?items.map(cellHTML).join(''):''}</div>`;
    }).join('');
    return `<div style="display:grid;grid-template-columns:86px repeat(4,1fr);">
      <div style="background:#0A1220;color:#fff;font-size:10.5px;font-weight:800;padding:8px;border:1px solid #0A1220;display:flex;align-items:center;">${dayLabel(d.key)}</div>
      ${cells}
    </div>`;
  }).join('');
  return `<div id="week-poster" dir="${lang==='ar'?'rtl':'ltr'}" style="position:fixed;left:-9999px;top:0;width:900px;background:#f4f5f7;font-family:'IBM Plex Sans Arabic',system-ui,sans-serif;padding:22px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <img src="./icon.png" style="width:36px;height:36px;"/>
        <div>
          <div style="font-size:16px;font-weight:800;color:#0A1220;">C.S Schedule — ${g}</div>
          <div style="font-size:10px;color:#777;">${lang==='ar'?'الجدول الأسبوعي الكامل':'Full weekly timetable'}</div>
        </div>
      </div>
      <div style="font-size:9px;color:#999;">cs-schedule</div>
    </div>
    <div style="border-radius:12px;overflow:hidden;border:1px solid #0A1220;">${head}${body}</div>
  </div>`;
}
$('week-image-btn').addEventListener('click', async ()=>{
  showToast(lang==='ar'?'بنجهز الصورة...':'Preparing image…');
  try{
    if(!window.html2canvas) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    const holder = document.createElement('div'); holder.innerHTML = weekGridHTML(group);
    document.body.appendChild(holder);
    const target = holder.querySelector('#week-poster');
    await new Promise(r=> target.querySelector('img') ? (target.querySelector('img').complete ? r() : target.querySelector('img').addEventListener('load', r, {once:true})) : r());
    const canvas = await html2canvas(target, {backgroundColor:'#f4f5f7', scale:2});
    holder.remove();
    canvas.toBlob(blob=>{
      const url = URL.createObjectURL(blob);
      const win = window.open(url, '_blank');
      if(!win){ const a=document.createElement('a'); a.download=`cs-schedule-${group}.png`; a.href=url; a.click(); }
      setTimeout(()=> URL.revokeObjectURL(url), 60000);
    }, 'image/png');
  } catch(e){ showToast(lang==='ar'?'حصل خطأ في التصدير':'Export failed'); }
});

// GPA calculator
const GRADES = {A:4,'A-':3.7,'B+':3.3,B:3,'B-':2.7,'C+':2.3,C:2,'C-':1.7,'D+':1.3,D:1,F:0};
let gpaRows = JSON.parse(localStorage.getItem('a8_gpa')||'[]'); if(!gpaRows.length) gpaRows=[{name:'',credits:3,grade:'A'}];
function renderGpa(){
  $('gpa-rows').innerHTML = gpaRows.map((r,i)=>`<div class="flex items-center gap-1.5">
    <input data-i="${i}" data-f="name" value="${r.name}" placeholder="${lang==='ar'?'اسم المادة':'Course'}" class="gpa-in glass rounded-lg px-2 py-1.5 text-xs flex-1 bg-transparent outline-none text-white"/>
    <input data-i="${i}" data-f="credits" type="number" min="1" max="6" value="${r.credits}" class="gpa-in glass rounded-lg px-2 py-1.5 text-xs w-12 bg-transparent outline-none text-white"/>
    <select data-i="${i}" data-f="grade" class="gpa-in glass rounded-lg px-1 py-1.5 text-xs bg-transparent outline-none text-white">${Object.keys(GRADES).map(g=>`<option value="${g}" ${g===r.grade?'selected':''}>${g}</option>`).join('')}</select>
    <button data-i="${i}" class="gpa-del w-7 h-7 rounded-full glass flex items-center justify-center text-zinc-400 shrink-0"><svg class="ic text-[10px]"><use href="#i-xmark"/></svg></button>
  </div>`).join('');
  const tc=gpaRows.reduce((s,r)=>s+Number(r.credits||0),0), tp=gpaRows.reduce((s,r)=>s+Number(r.credits||0)*GRADES[r.grade],0);
  $('gpa-total').textContent = tc? (tp/tc).toFixed(2) : '0.00';
  localStorage.setItem('a8_gpa', JSON.stringify(gpaRows));
}
function gpaEdit(e){ const el=e.target.closest('.gpa-in'); if(!el) return; gpaRows[el.dataset.i][el.dataset.f]=el.value; renderGpa(); }
$('gpa-rows').addEventListener('input', gpaEdit); $('gpa-rows').addEventListener('change', gpaEdit);
$('gpa-rows').addEventListener('click', e=>{ const b=e.target.closest('.gpa-del'); if(!b) return; gpaRows.splice(b.dataset.i,1); renderGpa(); });
$('gpa-add').addEventListener('click', ()=>{ gpaRows.push({name:'',credits:3,grade:'A'}); renderGpa(); });
renderGpa();

// Cairo weather (best-effort, silent on failure)
navigator.onLine && fetch('https://api.open-meteo.com/v1/forecast?latitude=30.06&longitude=31.25&current=temperature_2m,weather_code&timezone=Africa%2FCairo')
  .then(r=>r.json()).then(d=>{
    const tmp=Math.round(d.current.temperature_2m), code=d.current.weather_code;
    const icon = code===0?'☀️':code<=3?'⛅':code<=67?'🌧️':code<=77?'❄️':'⛈️';
    $('weather-chip').textContent = ` · ${icon} ${tmp}°`;
  }).catch(()=>{});

// PWA shortcuts deep-link (manifest "shortcuts")
const qp = new URLSearchParams(location.search);
if(qp.get('view')==='today'){ const d=DAYS.find(dd=>dd.idx===new Date().getDay()); if(d) activeDay=d; }

paintGroup(); setLang(lang); applyWeekUI(); applyChrome(); updateWeekCard();
if(BACKEND_ON) updateGate();
applySettings();
if(location.hash==='#links') openLinksPage(true);
bootAuth();
if(qp.get('view')==='settings') setTimeout(()=>openSheet('settings-sheet'), 250);
