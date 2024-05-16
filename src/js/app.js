import * as flsFunctions from './modules/functions.js';
import { popup } from './modules/popup.js';
import { swiperInit } from './modules/swiper.js';
import { observe } from './observe.js';

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/
const prepare = () => {
  const sider = document.querySelector('.sider');
  const siderBtns = document.querySelectorAll('.sider .sider__close, .header__burger');
  popup(sider, siderBtns);
  swiperInit();
  observe();
};

window.addEventListener('DOMContentLoaded', prepare);
