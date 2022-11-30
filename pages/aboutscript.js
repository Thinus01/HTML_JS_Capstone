const mobileMenu = document.querySelector('.MobileMenu');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
});