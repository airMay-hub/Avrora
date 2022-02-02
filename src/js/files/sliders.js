/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Navigation, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.welcome__slider')) {
		new Swiper('.welcome__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			observer: true,
			observeParents: true,
			// slidesPerView: 4,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			// preloadImages: false,
			// lazy: true,
			// Dotts
			pagination: {
				el: '.slider-welcome__controls',
				clickable: true,
			},
			
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				850: {
					slidesPerView: 2,
				},
				1275: {
					slidesPerView: 3,
				},
				1700: {
					slidesPerView: 4,
				},
			},
			
			on: {

			}
		});
	}
  if (document.querySelector('.events__slider')) {
		new Swiper('.events__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			observer: true,
			observeParents: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
			
			// Arrows
			navigation: {
				nextEl: '.event-next',
				prevEl: '.event-prev',
			},
			// Dotts
			pagination: {
				el: '.events-dotts',
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 14,
				},
				450: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				595: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				767.98: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
			
			on: {

			}
		});
	}
  if (document.querySelector('.teachers__slider')) {
		new Swiper('.teachers__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			observer: true,
			observeParents: true,
			// slidesPerView: 1,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
			
			// Arrows
			navigation: {
				nextEl: '.teachers-next',
				prevEl: '.teachers-prev',
			},
			// Dotts
			pagination: {
				el: '.teachers-dotts',
				clickable: true,
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 14,
				},
        375: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				479.98: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				585: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				767.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
			
			on: {

			}
		});
	}
  if (document.querySelector('.reviews__sliders')) {
    const reviewThumbs = new Swiper('.slider-reviews__thumbs', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// preloadImages: false,
			// lazy: true,

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
        375: {
					slidesPerView: 1.3,
					spaceBetween: 20,
				},
				425: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
				465: {
					slidesPerView: 1.8,
					spaceBetween: 20,
				},
				590: {
					slidesPerView: 2.3,
					spaceBetween: 20,
				},
				767.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				991.98: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			
			on: {

			}
		});
		new Swiper('.slider-reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Thumbs, Autoplay],
			
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
      thumbs: {
        swiper: reviewThumbs
      },
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// preloadImages: false,
			// lazy: true,
			
			// Arrows
			navigation: {
				nextEl: '.reviews-next',
				prevEl: '.reviews-prev',
			},
			// Dotts
			pagination: {
				el: '.reviews-dotts',
				clickable: true,
			},
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});