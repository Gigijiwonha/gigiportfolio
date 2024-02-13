'use strict';

// header gets darker when users start scrolling down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')
    }
});

// home get faded out when users start scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Arrow appears when users start scrolling down
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// Clicking toggle button / closing menu when its clicked
const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
});

headerMenu.addEventListener('click', () => {
    headerMenu.classList.remove('open');
});