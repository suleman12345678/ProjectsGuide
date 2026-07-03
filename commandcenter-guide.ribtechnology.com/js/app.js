document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all buttons
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked button
      item.classList.add('active');

      // Get target section id
      const targetId = item.getAttribute('data-target');

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
      
      // Close mobile menu on select
      if (window.innerWidth <= 860 && navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });
});