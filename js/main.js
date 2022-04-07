'use strict';
document.body.addEventListener('touchstart', function () { });
const socialBtn = document.querySelector('.social-btn');
const socialClose = document.querySelector('.social-close');
const navBtn = document.querySelector('.nav-btn');
const navClose = document.querySelector('.nav-close');
const body = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('mouseenter', (e) => {
    e.preventDefault()
    navLink[i].classList.add('glitch');
  })

  navLink[i].addEventListener('mouseleave', (e) => {
    e.preventDefault()
    navLink[i].classList.remove('glitch');
  })
}

/* АНИМАЦИЯ GSAP ДЛЯ НАВИГАЦИИ И ЗАЯВКИ */
let t1 = gsap.timeline({ paused: true });
t1.to('.nav-page', { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut })
t1.to('.nav-link', { opacity: 1, duration: .5, marginTop: 0, ease: Power2.easeInOut })

navBtn.addEventListener('click', () => {
  t1.play().timeScale(1);
});
navClose.addEventListener('click', () => {
  t1.timeScale(3.5)
  t1.reverse();
});

let t2 = gsap.timeline({ paused: true });
t2.to('.social-list', { opacity: 1, duration: 1, top: '100%', ease: Power2.easeInOut })

socialBtn.addEventListener('click', () => {
  t2.play().timeScale(1);
});

socialClose.addEventListener('click', () => {
  t2.timeScale(3)
  t2.reverse();
});

/* ДРОПЛИСТ */
const DroplistToggle = document.querySelectorAll('.full-services__list-link')
const Droplist = document.querySelectorAll('.full-services__droplist')
const DroplistArrow = document.querySelectorAll('.full-services__list-arrow')
const DroplistItem = document.querySelectorAll('.full-services__list-item')


for (let i = 0; i < DroplistToggle.length; i++) {
  DroplistToggle[i].addEventListener('click', (e) => {
    e.preventDefault()
    DroplistToggle[i].classList.toggle('active')
    Droplist[i].classList.toggle('active')
    DroplistArrow[i].classList.toggle('active')
    DroplistItem[i].classList.toggle('active')
  })
}


/* СЛАЙДЕР */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});