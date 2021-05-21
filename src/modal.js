import { disableScroll } from './blockScrolled';
import { enableScroll } from './blockScrolled';

export function modal() {
  const moreElems = document.querySelectorAll('.more');
  const modal = document.querySelector('.modal');

  const openModal = () => {
    modal.classList.remove('hidden');
    disableScroll();
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    enableScroll();
  };

  moreElems.forEach((moreElem) => {
    moreElem.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (event) => {
    const target = event.target;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('modal__close')
    ) {
      closeModal();
    }
  });
}
