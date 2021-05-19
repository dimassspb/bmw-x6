// Плавная прокрутка
// Smooth Scroll

export function smoothScroll() {
  const smoothScrollElements = document.querySelectorAll(
    'a[href^="#"]:not(a[href="#"])',
  ); // ссылка которая начинаетя на # но не должна содержать только #
  smoothScrollElements.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const blockScroll = document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}
