/* ========================================
   Golden Dragon — JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu Data ---------- */
  const menuItems = [
    {
      name: 'Dumplings al Vapor',
      desc: 'Delicados dumplings rellenos de cerdo y jengibre, cocidos al vapor en canasta de bambú tradicional.',
      price: '$145',
      img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
      category: 'entradas',
      badge: 'Popular',
      badgeClass: 'popular',
      tags: ['Cerdo', 'Al Vapor', 'Tradicional']
    },
    {
      name: 'Rollitos Primavera',
      desc: 'Crujientes rollitos rellenos de verduras frescas con salsa agridulce casera.',
      price: '$120',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
      category: 'entradas',
      badge: '',
      tags: ['Vegetariano', 'Crujiente']
    },
    {
      name: 'Pato Pekín',
      desc: 'Pato laqueado con piel crujiente y dorada, servido con tortillas, pepino y salsa hoisin.',
      price: '$380',
      img: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&q=80',
      category: 'principales',
      badge: 'Especial',
      badgeClass: '',
      tags: ['Pato', 'Premium', 'Clásico']
    },
    {
      name: 'Arroz Frito Cantonés',
      desc: 'Arroz salteado al wok con camarón, cerdo char siu, huevo y vegetales frescos.',
      price: '$165',
      img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
      category: 'principales',
      badge: 'Popular',
      badgeClass: 'popular',
      tags: ['Camarón', 'Wok', 'Cantonés']
    },
    {
      name: 'Sopa Wonton',
      desc: 'Caldo aromático con wontons rellenos de camarón, bok choy y fideos de huevo.',
      price: '$130',
      img: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&q=80',
      category: 'sopas',
      badge: '',
      tags: ['Camarón', 'Reconfortante']
    },
    {
      name: 'Mapo Tofu',
      desc: 'Tofu sedoso en salsa de frijol fermentado con pimienta de Sichuan y carne de cerdo.',
      price: '$155',
      img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
      category: 'principales',
      badge: 'Picante 🌶',
      badgeClass: '',
      tags: ['Sichuan', 'Picante', 'Tofu']
    },
    {
      name: 'Chow Mein',
      desc: 'Fideos salteados al wok con vegetales de temporada, pollo y salsa de soya oscura.',
      price: '$150',
      img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
      category: 'principales',
      badge: '',
      tags: ['Fideos', 'Pollo', 'Wok']
    },
    {
      name: 'Sopa Hot & Sour',
      desc: 'Sopa agripicante tradicional con tofu, hongos, brotes de bambú y huevo.',
      price: '$125',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
      category: 'sopas',
      badge: '',
      tags: ['Agripicante', 'Tradicional']
    },
    {
      name: 'Sesame Balls',
      desc: 'Bolitas de masa de arroz glutinoso rellenas de pasta de frijol rojo, cubiertas de sésamo.',
      price: '$95',
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      category: 'postres',
      badge: '',
      tags: ['Dulce', 'Sésamo']
    },
    {
      name: 'Té Jasmine Premium',
      desc: 'Té verde aromatizado con flores de jazmín, servido en tetera de porcelana tradicional.',
      price: '$65',
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
      category: 'bebidas',
      badge: '',
      tags: ['Té', 'Tradicional']
    },
    {
      name: 'Bubble Tea Taro',
      desc: 'Té cremoso de taro con perlas de tapioca y leche, dulzor ajustable a tu gusto.',
      price: '$85',
      img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80',
      category: 'bebidas',
      badge: 'Nuevo',
      badgeClass: '',
      tags: ['Taro', 'Bubble Tea']
    },
    {
      name: 'Mochi de Matcha',
      desc: 'Suave mochi relleno de helado de matcha japonés, espolvoreado con polvo de té verde.',
      price: '$110',
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      category: 'postres',
      badge: '',
      tags: ['Matcha', 'Helado']
    }
  ];

  /* ---------- Render Menu ---------- */
  const menuGrid = document.getElementById('menuGrid');
  let activeCategory = 'todos';

  function renderMenu(category) {
    const items = category === 'todos'
      ? menuItems
      : menuItems.filter(i => i.category === category);

    menuGrid.innerHTML = items.map((item, idx) => `
      <article class="menu-card" style="transition-delay: ${idx * 60}ms">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="menu-card-badge ${item.badgeClass || ''}">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3 class="menu-card-name">${item.name}</h3>
            <span class="menu-card-price">${item.price}</span>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
          <div class="menu-card-tags">
            ${item.tags.map(t => `<span class="menu-tag">${t}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');

    // Trigger card animations
    requestAnimationFrame(() => {
      document.querySelectorAll('.menu-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 60);
      });
    });
  }

  renderMenu('todos');

  /* ---------- Category Chips ---------- */
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelector('.category-chip.active')?.classList.remove('active');
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderMenu(activeCategory);
    });
  });

  /* ---------- Navbar Scroll ---------- */
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 60;

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > scrollThreshold);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- Active Nav Link ---------- */
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ---------- Scroll Animations ---------- */
  const animatedEls = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('animated'), +delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(el => observer.observe(el));

  /* ---------- Counter Animation ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Testimonials Slider ---------- */
  const track = document.getElementById('testimonialTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;
  const total = cards.length;

  // Create dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Auto slide
  let autoSlide = setInterval(() => goTo(current + 1), 5000);
  [prevBtn, nextBtn, ...dotsContainer.children].forEach(el => {
    el.addEventListener('click', () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => goTo(current + 1), 5000);
    });
  });

  /* ---------- Reservation Form ---------- */
  const form = document.getElementById('reservationForm');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  // Set min date to today
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toastMsg.textContent = '¡Reservación confirmada! Te contactaremos pronto.';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
    form.reset();
  });

  /* ---------- Parallax Effect ---------- */
  const parallaxImg = document.querySelector('.parallax-img');
  if (parallaxImg) {
    window.addEventListener('scroll', () => {
      const banner = parallaxImg.closest('.parallax-banner');
      const rect = banner.getBoundingClientRect();
      const speed = 0.3;
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        parallaxImg.style.transform = `translateY(${rect.top * speed}px)`;
      }
    }, { passive: true });
  }
});
