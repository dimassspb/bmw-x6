export function modal() {
  const modalBtn = document.querySelector('.more');
  const modal = document.querySelector('.modal');

  const openModal = () => {
    modal.classList.remove('hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
  };

  modalBtn.addEventListener('click', openModal);

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
