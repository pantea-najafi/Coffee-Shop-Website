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
const sections = document.querySelectorAll('section[id]');
const overlay = document.getElementById('overlay');
const backToTopButton = document.getElementById('back-to-top');

// !sticky nav
function scrolledNav() {
  if (window.scrollY > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}

// !showing back to top button on scroll
function showBackToTopButton() {
  if (window.scrollY > 0) {
    backToTopButton.classList.add('show-back-to-top');
  } else {
    backToTopButton.classList.remove('show-back-to-top');
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
  console.log('open');
}

function closeMenu() {
  navMenu.classList.remove('fixed');
  overlay.classList.remove('open');
}

// ! changing active link on scroll
function activeLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 110;
    const sectionID = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu li a[href*=' + sectionID + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav-menu li a[href*=' + sectionID + ']')
        .classList.remove('active');
    }
  });
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
  window.addEventListener('scroll', activeLink);
  window.addEventListener('scroll', showBackToTopButton);
}

document.addEventListener('DOMContentLoaded', createList);
document.addEventListener('DOMContentLoaded', init);
