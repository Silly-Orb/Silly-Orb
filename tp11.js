document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.movie-carousel');
  
    carousels.forEach(carousel => {
      let isDown = false;
      let startX;
      let scrollLeft;
  
      carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });
  
      carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
      });
  
      carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
      });
  
      carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Adjusts scroll speed
        carousel.scrollLeft = scrollLeft - walk;
      });
    });
  });
  