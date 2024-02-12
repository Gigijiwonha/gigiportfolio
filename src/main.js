const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')
    }
});


const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight/2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

// 화면을 줄이면 햄버거 모양 버튼이 생긴다
// 버튼을 누르면 메뉴바가 나온다
// 메뉴를 클릭하면 화면으로 이동하면서 메뉴바가 닫힌다

const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('open');
});

headerMenu.addEventListener('click', () => {
    headerMenu.classList.remove('open');
});