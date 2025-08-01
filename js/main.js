document.addEventListener("DOMContentLoaded", () => {
  // Toggle menu for small screens
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Form validation (contact.html only)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const email = document.querySelector("#email").value;
      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        e.preventDefault();
      }
    });
  }

  // Lightbox image gallery (gallery.html only)
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  if (galleryImages.length > 0 && lightbox && lightboxImg) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }

    // Optional: Close on lightbox background click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  // Scroll Reveal using IntersectionObserver
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => observer.observe(el));

  // Optional: ScrollReveal.js integration (if loaded)
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".reveal", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      duration: 800,
      reset: false,
    });
  }
});
