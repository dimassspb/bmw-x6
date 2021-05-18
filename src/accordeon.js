const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

console.log(featureLinkElems);
console.log(featureSubElems);
featureLinkElems.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    
      featureSubElems.forEach((el) => {
        el.classList.add('hidden');
      });
    featureLinkElems.forEach((el) => {
      el.classList.remove('feature__link_active');
    });
    featureSubElems[i].classList.remove('hidden');
    btn.classList.add('feature__link_active');
  });
});
