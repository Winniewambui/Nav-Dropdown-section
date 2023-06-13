const featuresMenu = document.querySelector('.features-nav');
const companyMenu = document.querySelector('.company-nav');
const featureElements = document.querySelector('.features-contents');
const companyElements = document.querySelector('.company-contents');
const arrow = document.querySelector('.arrow');

featuresMenu.addEventListener('click', openfeatureElements)

companyMenu.addEventListener('click', opencompanyElements)

function openfeatureElements() {
  event.preventDefault();
  featureElements.classList.toggle('hide');
  arrow.classList.toggle('rotate');
  featureElements.style.height = featureElements.scrollHeight + 'px';
}

function opencompanyElements() {
  event.preventDefault();
  companyElements.classList.toggle('hide');
  arrow.classList.toggle('rotate');
}
