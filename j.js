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
