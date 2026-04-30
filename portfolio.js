
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
  
  
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  
  const updateActiveLink = () => {
    let current = "";
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);
  

  const initializeTheme = () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;
    
  
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || (prefersDark && !savedTheme)) {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
    } else {
      document.body.classList.remove("dark-mode");
      themeToggle.textContent = "🌙";
    }
    
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  };
  
  const initializeTyped = () => {
    
    if (typeof Typed !== "undefined" && document.querySelector(".auto-type")) {
      new Typed(".auto-type", {
        strings: ["Developer", "Learner", "Problem Solver", "Innovator"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        smartBackspace: true
      });
    }
  };
  
  
  const enhanceScrollBehavior = () => {
   
    updateActiveLink();
   
    if (!CSS.supports("scroll-behavior", "smooth")) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  };
  

  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener("scroll", handleScroll, { passive: true });
  

  document.addEventListener("DOMContentLoaded", () => {
   
    initializeTheme();
    initializeTyped();
    enhanceScrollBehavior();
  });
  

  window.addEventListener("load", () => {

    if (typeof Typed !== "undefined" && !document.querySelector(".auto-type").classList.contains("typed-enabled")) {
      initializeTyped();
      document.querySelector(".auto-type").classList.add("typed-enabled");
    }
  });
  
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = "auto";
  }
  
 
  document.addEventListener("keydown", (e) => {
 
    if (e.altKey && e.key === "m") {
      document.querySelector("main")?.focus();
    }
  });
  

  console.log("%c👋 Welcome to Vinayak K Huragi's Portfolio!", "color: #667eea; font-size: 16px; font-weight: bold;");
  console.log("%cBuilt with HTML, CSS, and JavaScript", "color: #764ba2; font-size: 12px;");
