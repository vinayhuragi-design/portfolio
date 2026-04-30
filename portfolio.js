// ===== Smooth Scrolling for Nav Links =====
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
  
  // ===== Active Nav Link on Scroll =====
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
  
  // ===== Dark / Light Theme Toggle =====
  const initializeTheme = () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to light mode
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
  
  // ===== Typed.js Initialization =====
  const initializeTyped = () => {
    // Only initialize if Typed.js is loaded and element exists
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
  
  // ===== Enhanced Scroll Behavior =====
  const enhanceScrollBehavior = () => {
    // Update active links on page load
    updateActiveLink();
    
    // Smooth scrolling for hash links (backup for older browsers)
    if (!CSS.supports("scroll-behavior", "smooth")) {
      document.documentElement.style.scrollBehavior = "auto";
    }
  };
  
  // ===== Performance Optimized Scroll Listener =====
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
  
  // ===== Initialize All Features =====
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize in order
    initializeTheme();
    initializeTyped();
    enhanceScrollBehavior();
  });
  
  // ===== Fallback for older browsers =====
  window.addEventListener("load", () => {
    // Ensure typed.js loads even if DOMContentLoaded missed it
    if (typeof Typed !== "undefined" && !document.querySelector(".auto-type").classList.contains("typed-enabled")) {
      initializeTyped();
      document.querySelector(".auto-type").classList.add("typed-enabled");
    }
  });
  
  // ===== Accessibility: Reduce Motion Support =====
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = "auto";
  }
  
  // ===== Keyboard Navigation Enhancement =====
  document.addEventListener("keydown", (e) => {
    // Skip to main content with keyboard shortcut (Alt + M)
    if (e.altKey && e.key === "m") {
      document.querySelector("main")?.focus();
    }
  });
  
  // ===== Console Message (Optional Fun) =====
  console.log("%c👋 Welcome to Vinayak K Huragi's Portfolio!", "color: #667eea; font-size: 16px; font-weight: bold;");
  console.log("%cBuilt with HTML, CSS, and JavaScript", "color: #764ba2; font-size: 12px;");
