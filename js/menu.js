function createMenuList() {
  coffees.forEach((coffee) => {
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

document.addEventListener('DOMContentLoaded', createMenuList);
document.addEventListener('scroll', scrolledNav);
hamburger.addEventListener('click', showMenu);
hamburger.addEventListener('click', showMenu);
navCloseIcon.addEventListener('click', closeMenu);
