function initializeSliders() {
  document.querySelectorAll('.multi-slider-container').forEach(container => {
    const slideContainer = container.querySelector('.multi-slider');
    const slides = container.querySelectorAll('.multi-slide');
    const prevBtn = container.querySelector('.multi-prev');
    const nextBtn = container.querySelector('.multi-next');
    let currentIndex = 0;
    const visibleSlides = Math.floor(slideContainer.offsetWidth / slides[0].offsetWidth);

    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - visibleSlides) {
        currentIndex++;
        slideContainer.style.transform = `translateX(-${(100 / visibleSlides) * currentIndex}%)`;
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        slideContainer.style.transform = `translateX(-${(100 / visibleSlides) * currentIndex}%)`;
      }
    });
  });
}
function loadContent(containerId, filePath, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
      if (callback) callback();
      if (containerId === 'content-container') {
        initializeSliders(); // Reinitialize sliders after loading new content
      }
    })
    .catch(error => console.error(error));
}
function setupNavLinks() {
  const links = document.querySelectorAll('#content-container a[data-page]');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      loadContent('content-container', page);
    });
  });
}
window.onload = function () {
  loadContent('header-container', 'header.html');
  loadContent('content-container', 'main.html',setupNavLinks);
};
