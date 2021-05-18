export function accordeon() {
  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  featureLinkElems.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (!featureSubElems[i].classList.contains('hidden')) {
        featureSubElems[i].classList.add('hidden');
        featureLinkElems[i].classList.remove('feature__link_active');
      } else {
        featureSubElems.forEach((featureSubElem) => {
          featureSubElem.classList.add('hidden');
        });
        featureLinkElems.forEach((featureLinkElem) => {
          featureLinkElem.classList.remove('feature__link_active');
        });
        featureSubElems[i].classList.remove('hidden');
        btn.classList.add('feature__link_active');
      }
    });
  });
}
