// 🎧 تشغيل / إيقاف الصوت لأي زر تشغيل
document.querySelectorAll(".card button:first-of-type").forEach((btn) => {
  const audio = btn.parentElement.querySelector("audio");

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = "اضغط لإيقاف التشغيل";
    } else {
      audio.pause();
      btn.textContent = "اضغط للتشغيل";
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