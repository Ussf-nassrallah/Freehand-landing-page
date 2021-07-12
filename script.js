const headerToggle = document.querySelector('#headerToggle');
const headerMobileMenu = document.querySelector('#headerMobileMenu');

headerToggle.addEventListener('click', () => {
  headerMobileMenu.classList.toggle('active');
});