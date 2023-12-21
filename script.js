const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
});
