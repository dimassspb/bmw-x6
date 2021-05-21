export function burgerMenu() {
  const menuEl = document.querySelector('.menu');
  const burgerMenuEl = document.querySelector('.humburger-menu');

  const handlerMenu = (event) => {
    const target = event.target;
    const parent = target.closest('.menu');
    if (
      (!parent && target !== burgerMenuEl) ||
      target.classList.contains('menu-list__link')
    ) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    menuEl.classList.toggle('menu-active');
    burgerMenuEl.classList.toggle('humburger-menu-active');

    if (menuEl.classList.contains('menu-active')) {
      document.body.addEventListener('click', handlerMenu);
    } else {
      document.body.removeEventListener('click', handlerMenu);
    }
  };
  burgerMenuEl.addEventListener('click', toggleMenu);
}
