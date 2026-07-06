// 🎧 تشغيل / إيقاف الصوت أو الفيديو لأي زر تشغيل
document.querySelectorAll(".card button:first-of-type").forEach((btn) => {
  // التعديل هنا: نبحث عن audio أو video
  const media = btn.parentElement.querySelector("audio, video");

  btn.addEventListener("click", () => {
    // نتأكد أولاً أن الملف موجود حتى لا يحدث خطأ
    if (media) {
      if (media.paused) {
        media.play();
        btn.textContent = "اضغط لإيقاف التشغيل";
      } else {
        media.pause();
        btn.textContent = "اضغط للتشغيل";
      }
    }
  });
});

const toggleBtn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");
const body = document.body;
const mobileIcon = document.getElementById('mobile-icon');
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileThemeBtn = document.getElementById("mobile-theme");

mobileThemeBtn.addEventListener("click", () => {
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
});

menuBtn.addEventListener("click", () => {
mobileMenu.classList.toggle("show");
menuBtn.innerHTML = mobileMenu.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// ✅ غلق القائمة عند الضغط على أي رابط
document.querySelectorAll(".mobile-menu a").forEach(link => {
link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
});
});
// استرجاع الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}
// تفعيل مكتبة Plyr على كل الملفات الصوتية والمرئية اللي واخدة كلاس js-player
document.addEventListener('DOMContentLoaded', () => {
    const playerOptions = {
        // تحديد العناصر اللي تظهر في قائمة الإعدادات (شيلنا منها الـ 'speed')
        settings: ['captions', 'quality', 'loop'] 
    };
    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p, playerOptions));
});

document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.getElementById('quran-content');
    const baseUrl = 'https://server11.mp3quran.net/shatri/';
    const imageUrl = 'https://i.pinimg.com/564x/f4/3a/1c/f43a1c939f6dc4c921d8e43e2e46b6e2.jpg';

    // مصفوفة بأسماء سور القرآن الكريم كاملة
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
            // تحويل الرقم لـ 3 خانات (1 يبقى 001)
            let numStr = i.toString().padStart(3, '0');
            let audioSrc = `${baseUrl}${numStr}.mp3`;
            let surahName = surahNames[i - 1]; // نخصم 1 لأن المصفوفة بتبدأ من 0

            // بناء الكارت وتخزينه
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

        // طباعة كل الكروت جوه الصفحة مرة واحدة (أسرع في الأداء)
        container.innerHTML = cardsHTML;
    }

    // تفعيل Plyr وإخفاء زرار السرعة بعد ما الكروت اتعملت
    const playerOptions = {
        settings: ['captions', 'quality', 'loop'] 
    };
    const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p, playerOptions));
});
// عند الضغط على الزر
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
