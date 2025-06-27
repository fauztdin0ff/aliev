/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu-toggle");
   const menuBody = document.querySelector(".header__bottom");
   const body = document.querySelector("body");

   if (menuIcon && menuBody) {
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});

/*------------------------------Кастомный курсор---------------------------*/
const previewElements = document.querySelectorAll('.reviews__preview');
const customCursor = document.querySelector('.custom-cursor');

function enableCustomCursor() {
   previewElements.forEach(preview => {
      preview.addEventListener('mouseenter', showCursor);
      preview.addEventListener('mouseleave', hideCursor);
      preview.addEventListener('mousemove', moveCursor);
   });
}

function disableCustomCursor() {
   customCursor.style.display = 'none';
   previewElements.forEach(preview => {
      preview.removeEventListener('mouseenter', showCursor);
      preview.removeEventListener('mouseleave', hideCursor);
      preview.removeEventListener('mousemove', moveCursor);
   });
}

function showCursor() {
   customCursor.style.display = 'flex';
}

function hideCursor() {
   customCursor.style.display = 'none';
}

function moveCursor(e) {
   customCursor.style.left = e.clientX + 'px';
   customCursor.style.top = e.clientY + 'px';
}

function handleCursorByScreenSize() {
   if (window.innerWidth >= 1024) {
      enableCustomCursor();
   } else {
      disableCustomCursor();
   }
}

document.addEventListener('DOMContentLoaded', handleCursorByScreenSize);


/*------------------------------Swiper in case---------------------------*/
let swiperInstance = null;

function initMobileSwiper() {
   const isMobile = window.innerWidth < 600;

   if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper('.review__gallery-slider', {
         slidesPerView: 1,
         spaceBetween: 16,
         loop: true,
         speed: 600,
         autoplay: {
            delay: 2000,
            disableOnInteraction: true,
         },
      });
   }

   if (!isMobile && swiperInstance) {
      swiperInstance = null;
   }
}

window.addEventListener('load', initMobileSwiper);
window.addEventListener('resize', initMobileSwiper);


/*------------------------------Tabs in cases---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   const previews = document.querySelectorAll('.reviews__preview');
   const submenuLinks = document.querySelectorAll('.submenu a');
   const reviews = document.querySelectorAll('.review');

   function showReviewById(id) {
      reviews.forEach(review => review.classList.remove('show'));

      const activeReview = document.querySelector(`.review[data-review="${id}"]`);
      if (activeReview) {
         activeReview.classList.add('show');
         animateReviewIn(activeReview);

         activeReview.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
      }

      submenuLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.submenu a[data-review="${id}"]`);
      if (activeLink) {
         activeLink.classList.add('active');
      }

      previews.forEach(p => p.classList.remove('active'));
      const activePreview = document.querySelector(`.reviews__preview[data-preview="${id}"]`);
      if (activePreview) {
         activePreview.classList.add('active');
      }
   }

   previews.forEach(preview => {
      preview.addEventListener('click', () => {
         const target = preview.dataset.preview;
         showReviewById(target);
      });
   });

   submenuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
         const target = link.dataset.review;
         showReviewById(target);
      });
   });

   const backButtons = document.querySelectorAll('.review__back');
   backButtons.forEach(button => {
      button.addEventListener('click', () => {
         const review = button.closest('.review');
         if (review && review.classList.contains('show')) {
            review.classList.remove('show');
         }
      });
   });
});


// ----------------------------- Переключение слайдов по меню -----------------------------
const submenu = document.querySelector('.submenu');

document.querySelectorAll('[data-slide]').forEach(link => {
   link.addEventListener('click', async (e) => {
      e.preventDefault();

      const nextIndex = +link.dataset.slide;
      const prevIndex = mainSlider.activeIndex;

      if (nextIndex === 2) {
         submenu.classList.add('opened');
      } else {
         submenu.classList.remove('opened');
      }

      if (prevIndex === 2 && nextIndex === 2) {
         const activeReview = document.querySelector('.review.show');
         if (activeReview) {
            activeReview.classList.remove('show');

            activeReview.scrollTo({
               top: 0,
               left: 0,
               behavior: 'smooth'
            });
         }
         return;
      }

      document.querySelectorAll('[data-slide]').forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const prevSlide = mainSlider.slides[prevIndex];

      await animateSlideOut(prevSlide, prevIndex);
      mainSlider.slideTo(nextIndex);
   });
});



/*------------------------------Animations in case---------------------------*/
function animateReviewIn(review) {
   if (!review) return;

   animateWordsFromBottom(document.querySelector('.review__title'));

   gsap.fromTo(review.querySelectorAll('.review__image img'), {
      clipPath: 'inset(100% 0% 0% 0%)'
   }, {
      clipPath: 'inset(0% 0% 0% 0%)',
      delay: 1,
      duration: 1,
      ease: 'power3.out',
   });

}




// ----------------------------- Инициализация Swiper -----------------------------
const mainSlider = new Swiper('.main-slider', {
   slidesPerView: 1,
   allowTouchMove: false,
   simulateTouch: false,
   keyboard: false,
   mousewheel: false,
   loop: false,
   effect: 'fade',
   fadeEffect: { crossFade: true },
   speed: 400,
   on: {
      slideChangeTransitionStart() {
         const prevSlide = mainSlider.slides[mainSlider.previousIndex];
         const currentSlide = mainSlider.slides[mainSlider.activeIndex];

         animateSlideOut(prevSlide, mainSlider.previousIndex);
         animateSlideIn(currentSlide, mainSlider.activeIndex);
      }
   }
});

// ----------------------------- Анимации входа -----------------------------
function animateSlideIn(slide, index) {
   if (!slide) return;
   gsap.killTweensOf("*");

   let tl = gsap.timeline();

   switch (index) {
      case 0: // Hero
         animateWordsFromBottom(slide.querySelector('.hero__title'));

         tl.to('.hero__overlay', {
            y: '-100%',
            duration: 1,
            ease: 'power2.out'
         });

         tl.fromTo('.hero__subtitle', {
            opacity: 1,
            clipPath: 'inset(0% 100% 0% 0%)'
         }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1
         }, "+=0.8");
         break;

      case 1: // About
         animateWordsFromBottom(slide.querySelector('.about__text h2'));

         const overlay = slide.querySelector('.about__overlay');
         if (overlay) gsap.set(overlay, { x: 0 });

         tl.to(overlay, {
            x: '100%',
            duration: 1,
            ease: 'power2.out'
         });


         tl.from('.about__image', {
            x: -150,
            duration: 1,
            ease: 'power2.out'
         }, "<");

         tl.fromTo(slide.querySelectorAll('.about__text p, .about__text h3, .about__text h4'), {
            opacity: 1,
            clipPath: 'inset(0% 100% 0% 0%)'
         }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1
         }, '+=0.8');

         break;

      case 2: // Reviews
         tl.fromTo(slide.querySelectorAll('.reviews__preview-image'), {
            clipPath: 'inset(100% 0% 0% 0%)'
         }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power3.out',
         });

         tl.fromTo(slide.querySelectorAll('.reviews__preview-name'), {
            opacity: 1,
            clipPath: 'inset(0% 100% 0% 0%)'
         }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1
         }, '-=0.5');
         break;
   }
}

// ----------------------------- Анимации выхода -----------------------------
function animateSlideOut(slide, index) {
   if (!slide) return Promise.resolve();

   return new Promise(resolve => {
      let tl = gsap.timeline({ onComplete: resolve });

      switch (index) {
         case 0: // Hero
            tl.to(slide.querySelectorAll('.hero__title span'), {
               opacity: 0,
               duration: 0.3,
               ease: 'power1.in'
            });

            tl.to(slide.querySelectorAll('.hero__subtitle'), {
               opacity: 0,
               duration: 0.3,
               ease: 'power1.in'
            }, "<");

            tl.to('.hero__overlay', {
               y: '0%',
               duration: 0.5,
               ease: 'power2.out'
            }, "<");
            break;

         case 1: // About
            tl.to(slide.querySelectorAll('.about__text p, .about__text h3, .about__text h4'), {
               opacity: 0,
               y: 20,
               duration: 0.5,
               ease: 'power1.in'
            });

            tl.to('.about__overlay', {
               x: '0%',
               duration: 0.8,
               ease: 'power2.out'
            }, "<");
            break;

         default:
            resolve(); // нет анимации — сразу завершение
      }
   });
}

// ----------------------------- Анимация текста по словам -----------------------------
function wrapWords(element) {
   if (!element || element.dataset.wrapped) return;

   const words = element.textContent.trim().split(/\s+/);
   element.innerHTML = '';

   words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.marginRight = '0.3em';
      element.appendChild(span);
   });

   element.dataset.wrapped = 'true';
}

function animateWordsFromBottom(element) {
   if (!element) return;

   wrapWords(element);

   gsap.fromTo(element.children, {
      y: 30,
      opacity: 0
   }, {
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
   });
}

// ----------------------------- Стартовая инициализация -----------------------------
window.addEventListener('load', () => {
   const heroTitle = document.querySelector('.hero__title');
   wrapWords(heroTitle);

   animateSlideIn(mainSlider.slides[mainSlider.activeIndex], mainSlider.activeIndex);

   gsap.to('.header__top', {
      height: 68,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      onComplete() {
         document.querySelector('.header__top')?.classList.remove('header__top-loading');
      }
   });

   gsap.fromTo('.header__menu', {
      y: 20,
      opacity: 0
   }, {
      y: 0,
      opacity: 1,
      delay: 0.8,
      duration: 1,
      ease: 'power2.out'
   });

   gsap.fromTo('.header__menu li a svg', {
      opacity: 0
   }, {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: 'power2.in'
   });
});

})();

/******/ })()
;