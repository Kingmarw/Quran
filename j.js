// --- 1. إعدادات القائمة الجانبية (Mobile Menu) ---
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menuBtn.innerHTML = mobileMenu.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// غلق القائمة عند الضغط على أي رابط
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});


// --- 2. إعدادات الوضع الليلي (Dark Mode) ---
const toggleBtn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");
const mobileThemeBtn = document.getElementById("mobile-theme");
const mobileIcon = document.getElementById('mobile-icon');
const body = document.body;

// استرجاع الوضع المحفوظ عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
  mobileIcon.classList.replace("fa-moon", "fa-sun");
}

// دالة لتغيير الوضع
function toggleTheme() {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
    mobileIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
    mobileIcon.classList.replace("fa-sun", "fa-moon");
  }
}

// ربط زر الكمبيوتر والموبايل بنفس الدالة
toggleBtn.addEventListener("click", toggleTheme);
mobileThemeBtn.addEventListener("click", toggleTheme);


// --- 3. جلب الـ 114 سورة وتفعيل مكتبة Plyr ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('quran-content');
    const baseUrl = 'https://server11.mp3quran.net/shatri/';
    const imageUrl = 'https://i.pinimg.com/564x/f4/3a/1c/f43a1c939f6dc4c921d8e43e2e46b6e2.jpg';

    // مصفوفة بأسماء سور القرآن الكريم
    const surahNames = [
      "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
      "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
      "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
      "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
      "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
      "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
      "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
      "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
      "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
      "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
      "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
      "المسد", "الإخلاص", "الفلق", "الناس"
    ];

    if (container) {
        let cardsHTML = '';

        // اللوب من 1 لـ 114
        for (let i = 1; i <= 114; i++) {
            let numStr = i.toString().padStart(3, '0');
            let audioSrc = `${baseUrl}${numStr}.mp3`;
            let surahName = surahNames[i - 1]; 

            cardsHTML += `
            <div class="card">
                <img src="${imageUrl}" alt="سورة ${surahName}" width="100%">
                <div class="dash"></div>
                <h1>سورة ${surahName}</h1>
                <br>
                <p>للقاريء : أبو بكر الشاطري</p>
                <br>
                <audio src="${audioSrc}" class="js-player" controls></audio>
                <a href="${audioSrc}" download>
                    <button style="margin-top: 15px; width: 100%;">تنزيل</button>
                </a>
            </div>
            `;
        }

        // طباعة كل الكروت الصوتية جوه الصفحة
        container.innerHTML = cardsHTML;
    }

    // تفعيل Plyr على الفيديوهات والصوتيات معاً في خطوة واحدة
    const playerOptions = {
        settings: ['captions', 'quality', 'loop'] 
    };
    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p, playerOptions));
});
