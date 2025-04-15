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

//header
fetch('Header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });