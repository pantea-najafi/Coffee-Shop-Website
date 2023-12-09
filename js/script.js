const searchBox = document.getElementById('search-box');
const searchIcon = document.getElementById('search');
const navbar = document.getElementById('navbar');
const closeIcon = document.getElementById('close');
const mobileSearchBox = document.getElementById('mobile-search-box');
const mobileSearchIcon = document.getElementById('mobile-search');
const mobileCloseIcon = document.getElementById('mobile-close');
const hamburger = document.getElementById('hamburger');
const navCloseIcon = document.getElementById('nav-close-icon');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

// !sticky nav
function scrolledNav() {
  if (window.scrollY > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

// ! opening and closing search bar
function openSearch() {
  searchBox.classList.add('open');
}

function closeSearch() {
  searchBox.classList.remove('open');
}

// ! opening and closing search for mobile screens
function openMobileSearch() {
  console.log('open');
  mobileSearchBox.classList.add('open');
}

function closeMobileSearch() {
  mobileSearchBox.classList.remove('open');
}

// ! showing and closing menu for mobile screens
function showMenu() {
  navMenu.classList.add('fixed');
  overlay.classList.add('open');
}

function closeMenu() {
  navMenu.classList.remove('fixed');
  overlay.classList.remove('open');
}

// ! creating menu for home page
function createList() {
  coffees.slice(0, 6).forEach((coffee) => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <div class="image">
      <img src="${coffee.photo}" alt="" />
      </div>
      <div class="info">
        <h3>${coffee.name}</h3>
        <p>${coffee.desc}</p>
      </div>
    `;

    document.querySelector('.grid-wrapper').appendChild(div);
  });
}

// ! swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ! initialize
function init() {
  searchIcon.addEventListener('click', openSearch);
  closeIcon.addEventListener('click', closeSearch);
  mobileSearchIcon.addEventListener('click', openMobileSearch);
  mobileCloseIcon.addEventListener('click', closeMobileSearch);
  hamburger.addEventListener('click', showMenu);
  navCloseIcon.addEventListener('click', closeMenu);
  window.addEventListener('scroll', scrolledNav);
}

document.addEventListener('DOMContentLoaded', createList);
document.addEventListener('DOMContentLoaded', init);
