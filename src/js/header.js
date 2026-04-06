async function initMobileMenu() {
  const header = document.querySelector('.header-section');
  const openBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.close-btn');
  const closeBtnHeader = document.querySelector('.close-btn-header');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav a');

  const toggleMenu = (forceState) => {
    requestAnimationFrame(() => {
      const isOpen = menu.classList.contains('active');
      const shouldOpen = forceState !== undefined ? forceState : !isOpen;

      menu.classList.toggle('active', shouldOpen);
      overlay.classList.toggle('active', shouldOpen);
      header.classList.toggle('menu-open', shouldOpen);
      document.body.classList.toggle('no-scroll', shouldOpen);
    });
  };

  // відкриття
  if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));

  // закриття
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  if (closeBtnHeader) closeBtnHeader.addEventListener('click', () => toggleMenu(false));
  if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

  // клік по пункту меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);

export default initMobileMenu;