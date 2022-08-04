
let showMore=document.querySelector('.slider__items_hidden');
let buttonMore=document.querySelector('.button_show-more');
let closeButton=document.querySelector('.button_hide');

buttonMore.addEventListener('click', function () {
  showMore.classList.remove('hidden');
  buttonMore.classList.add('hidden');
  closeButton.classList.remove('hidden');
  });
closeButton.addEventListener('click', function () {
  showMore.classList.add('hidden');
  closeButton.classList.add('hidden');
  buttonMore.classList.remove('hidden');
  })

  const swiper = new Swiper('.brands-slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })