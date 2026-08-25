document.addEventListener('DOMContentLoaded', () => {

  // Menu mobile
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('navMobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Fade-in discreto ao rolar
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => observer.observe(el));

    // Rede de segurança: se por algum motivo o observer não disparar
    // (extensão do navegador, engine incomum), revela tudo mesmo assim
    // depois de um tempo — nunca deixar conteúdo travado invisível.
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }, 2000);
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

});
