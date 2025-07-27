// Trigger animations when product sections come into view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.product-section');
  
    const options = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  // Smooth scroll for navigation (if links point to anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  