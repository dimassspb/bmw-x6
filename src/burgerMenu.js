export function burgerMenu() {
  const menuEl = document.querySelector('.menu');
  const burgerMenuEl = document.querySelector('.humburger-menu');

  const toggleMenu = () => {
    menuEl.classList.toggle('menu-active');
    burgerMenuEl.classList.toggle('humburger-menu-active');
  };
  burgerMenuEl.addEventListener('click', toggleMenu);

  
}
