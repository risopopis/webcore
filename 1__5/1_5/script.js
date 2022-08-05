let showMore = document.querySelector('.slider__items_hidden');
let buttonMore = document.querySelector('.button_show-more');
let closeButton = document.querySelector('.button_hide');

closeButton.classList.add('hidden');
showMore.classList.add('hidden');
buttonMore.addEventListener('click', function () {
  showMore.classList.remove('slider__items_hidden');
  buttonMore.classList.add('button_show-more_hidden');
  closeButton.classList.remove('button_hide_hidden');
});
closeButton.addEventListener('click', function () {
  showMore.classList.add('slider__items_hidden');
  closeButton.classList.add('button_hide_hidden');
  buttonMore.classList.remove('button_show-more_hidden');
})

  const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }
    },
    observer: true,
})

