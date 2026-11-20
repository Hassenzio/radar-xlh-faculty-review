/* ═══════════════════════════════════════════════════════
   RADAR XLH — Faculty Review Platform
   Application Logic
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModuleTabs();
  initScrollReveal();
  initSmoothScroll();
});

/* ── Navigation ── */
function initNavigation() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  const mobile = document.querySelector('.nav-mobile');
  const links = document.querySelectorAll('.nav-links a, .nav-mobile a');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 40);
    lastScroll = scrollY;
  }, { passive: true });

  // Burger toggle
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobile.classList.toggle('open');
    document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      burger?.classList.remove('open');
      mobile?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link tracking
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ── Module Tabs ── */
function initModuleTabs() {
  const tabs = document.querySelectorAll('.modulo-tab');
  const panels = document.querySelectorAll('.modulo-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.module;

      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === 'modulo-' + target) {
          p.classList.add('active');
        }
      });

      // Scroll tab into view on mobile
      if (window.innerWidth < 1024) {
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  });
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
