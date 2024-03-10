const burgerButton = document.querySelector('[data-sandwich]');
const logo = document.querySelector('[data-header-logo]')
const body = document.querySelector('body');
const nav = document.querySelector('[data-main-nav]');
const navItems = document.querySelectorAll('[data-nav-item]');


if (burgerButton) {
  const openBurger = function() {
    if (!burgerButton.classList.contains('is-active')) {
      openBurgerMenu();
    }
    else closeBurgerMenu();
  }
  const openBurgerMenu = function() {
      body.classList.add('scroll-lock');
      logo.classList.add('is-menu');
      burgerButton.classList.add('is-active');
      nav.classList.add('is-active');
      navItems.forEach((item, i) => {
        item.style.transitionDelay = `${i*500}ms`
      })
  }
  
  const closeBurgerMenu = function() {
      body.classList.remove('scroll-lock');
      logo.classList.remove('is-menu');
      burgerButton.classList.remove('is-active');
      nav.classList.remove('is-active');
      navItems.forEach((item, i) => {
        item.style.transitionDelay = `0ms`
      })
  }
  
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const width = entry.borderBoxSize[0].inlineSize.toFixed(2);
      if (width < 1024) {
        burgerButton.addEventListener('click', openBurger);
      }
      else {
        burgerButton.removeEventListener('click', openBurger);
        closeBurgerMenu();
      }
    });
  });
  
  resizeObserver.observe(body)
  
  document.addEventListener('keydown', function(evt) {
    if(evt.key === "Escape") {
      closeBurgerMenu();
  }
  })
}

