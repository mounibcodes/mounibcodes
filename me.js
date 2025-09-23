document.querySelectorAll('.id').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href') //.substring(1); // Remove #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});






function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 50;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Trigger once on page load
revealOnScroll();

// Mobile menu toggle
const menuButton = document.querySelector('.menu-dots');
const mobileMenu = document.getElementById('mobileMenu');
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) {
      mobileMenu.removeAttribute('hidden');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.setAttribute('hidden', '');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.setAttribute('hidden', '');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
