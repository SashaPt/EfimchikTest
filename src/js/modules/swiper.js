import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const swiperInit = () => {
  new Swiper('.services__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 23,
    navigation: {
      nextEl: document.querySelector('.services__slider-nav .swiper-button-next'),
      prevEl: document.querySelector('.services__slider-nav .swiper-button-prev'),
    },
  });
};
