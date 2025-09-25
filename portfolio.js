// ===== Smooth Scrolling for Nav Links =====
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
  
  // ===== Typing Effect for Hero Title =====
  const text = "I am a Programmer";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.querySelector(".nav-item2 h1").textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 120);
    }
  }
  document.querySelector(".nav-item2 h1").textContent = "";
  window.addEventListener("load", typeEffect);
  
  // ===== Scroll Indicator Bounce =====
  const scrollIndicator = document.createElement("div");
  scrollIndicator.classList.add("scroll-indicator");
  scrollIndicator.innerHTML = "⬇ Scroll Down";
  document.querySelector("nav").appendChild(scrollIndicator);
  
  // ===== Dark / Light Theme Toggle =====
  const themeToggle = document.createElement("button");
  themeToggle.textContent = "🌙";
  themeToggle.classList.add("theme-toggle");
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
  
// ===== Typed.js Initialization =====
// Make sure to include Typed.js library in your HTML file
// to made the typing effect work
  var typed = new Typed(".auto-type",{
    strings: ["Web Developer", "Programmer", "Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    looped: true
  })