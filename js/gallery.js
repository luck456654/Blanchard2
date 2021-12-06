let createStatus=0;
function createGallery(){
  console.log("Создаю галерею")
  if (createStatus==0){
    createStatus=1;
let gallerySlider = new Swiper(".gallery__right--content", {
      nextButton:'.gallery__btn--next',
	  prevButton:'.gallery__btn--prev',  
  
  pagination: '.gallery__pagination',
  paginationType:"fraction",
   
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn:1,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      slidesPerColumn:2,
      spaceBetween: 30
    },

    1200: {
      slidesPerView:2,
      slidesPerColumn:2,
      spaceBetween: 50
    },
    10000: {
      slidesPerView:3,
      slidesPerColumn:2,
      spaceBetween: 50
    }
  },
  spaceBetween: 30,
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});
createStatus=0;
}
else {
  return
}
}
window.addEventListener('resize',createGallery)
createGallery();







