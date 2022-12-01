const HamLine1 = document.querySelector('.HamLine1');
const HamLine2 = document.querySelector('.HamLine2');
const HamLine3 = document.querySelector('.HamLine3');
const Change1 = document.querySelector('.Change1');
const Change2 = document.querySelector('.Change2');
const Change3 = document.querySelector('.Change3');
const mobileMenu = document.querySelector('.MobileMenu');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  HamLine1.classList.toggle('Change1');
  HamLine2.classList.toggle('Change2');
  HamLine3.classList.toggle('Change3');
});