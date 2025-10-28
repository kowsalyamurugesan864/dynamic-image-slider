
function login() {
  const user = document.getElementById("userid").value;
  const pass = document.getElementById("password").value;

  if (user === "user123" && pass === "pass123") {
    localStorage.setItem("loggedIn", "true");
    showPage("homePage");
  } else {
    alert("Invalid credentials! Try user123 / pass123");
  }
}


function logout() {
  localStorage.removeItem("loggedIn");
  showPage("loginPage");
  alert("You have been logged out.");
}


function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}


let currentSlide = 0;
setInterval(() => {
  let slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);


function changeTheme(theme) {
  document.body.className = theme === "default" ? "" : theme;
  localStorage.setItem("theme", theme);
}


window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    showPage("homePage");
  } else {
    showPage("loginPage");
  }

  const savedTheme = localStorage.getItem("theme") || "default";
  changeTheme(savedTheme);
  document.querySelectorAll(".theme-select").forEach((sel) => (sel.value = savedTheme));
};


