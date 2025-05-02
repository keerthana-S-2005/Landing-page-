// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Button click alert
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Thank you for getting started!");
});
