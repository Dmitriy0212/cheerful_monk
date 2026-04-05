import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import { getFeedbacksList } from "./baseUrl.js";

export async function fitbek() {
  let content = document.querySelector('.sliderwrapper');
  let fitmas = [];
  try {
    fitmas = await getFeedbacksList(1, 12);
  } catch (error) {
    console.log('Помилка в doStuff:', error);
  }

  content.innerHTML = bdsm(fitmas);
  const swiper = new Swiper('.revius-slider', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 7,
    },
    navigation: {
      nextEl: '.sliderbtn--next',
      prevEl: '.sliderbtn--prev',
    },
    on: {
      init() {
        updateButtons(this);
      },
      slideChange() {
        updateButtons(this);
      },
    },
    breakpoints: {
      300: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
      768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 24 },
      1440: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
    },
  });
}
function bdsm(fitmas) {
  return fitmas
    .map(item => {
      return `<li class="slider__slide swiper-slide">
        <p>${item.rate}</p>
        <p class="slider__title">${item.descr}</p>
        <p class="slider__price">${item.name}</p>
        </li>`
    })
    .join('');
}
function updateButtons(swiper) {
  const prevBtn = document.querySelector('.sliderbtn--prev');
  const nextBtn = document.querySelector('.sliderbtn--next');
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}