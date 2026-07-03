/* ===========================
   WORKCORE DOCUMENTATION JS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu toggle ──────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });


  // ── Active nav highlighting on scroll ──────────────────
  const sections = document.querySelectorAll('[id]');
  const navItems = document.querySelectorAll('.nav-item[data-section]');
  const progressFill = document.getElementById('progressFill');
  const mainContent = document.getElementById('mainContent');

  function getScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    let current = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === current);
    });

    // Update progress bar
    progressFill.style.width = getScrollProgress() + '%';
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();


  // ── Smooth scroll for nav links ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const topOffset = target.offsetTop - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });

      // Close mobile menu if open
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    });
  });


  // ── Animate sections on scroll into view ────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.doc-section, .hero-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });


  // ── Card hover depth effect ──────────────────────────────
  document.querySelectorAll('.arch-card, .feature-item, .kpi-card, .phase2-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  // ── Entity table row highlight ──────────────────────────
  document.querySelectorAll('.entity-table tbody tr').forEach(row => {
    row.style.cursor = 'default';
    row.addEventListener('click', () => {
      document.querySelectorAll('.entity-table tbody tr').forEach(r => r.classList.remove('selected'));
      row.classList.toggle('selected');
    });
  });


  // ── Image placeholder click-to-upload hint ──────────────
  document.querySelectorAll('.img-placeholder').forEach(placeholder => {
    placeholder.style.cursor = 'pointer';
    placeholder.title = 'Click to see image instructions';

    placeholder.addEventListener('click', () => {
      const hint = placeholder.querySelector('.img-hint');
      if (!hint) return;

      hint.style.background = 'rgba(245,158,11,0.1)';
      hint.style.padding = '6px 10px';
      hint.style.borderRadius = '4px';
      hint.style.border = '1px solid rgba(245,158,11,0.3)';
      hint.style.color = '#d4aa60';
      hint.style.transition = 'all 0.3s';

      setTimeout(() => {
        hint.style.background = '';
        hint.style.padding = '';
        hint.style.borderRadius = '';
        hint.style.border = '';
        hint.style.color = '';
      }, 1800);
    });
  });


  // ── Status flow interaction ──────────────────────────────
  const statusNodes = document.querySelectorAll('.status-node');
  statusNodes.forEach(node => {
    node.style.cursor = 'pointer';
    node.addEventListener('click', () => {
      statusNodes.forEach(n => n.style.boxShadow = '');
      const dot = node.querySelector('.status-dot');
      const color = window.getComputedStyle(dot).backgroundColor;
      node.style.boxShadow = `0 0 0 2px ${color}40, 0 0 16px ${color}30`;
    });
  });


  // ── Copy code on click ───────────────────────────────────
  document.querySelectorAll('code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Click to copy';

    code.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        const original = code.textContent;
        const originalColor = code.style.color;
        code.textContent = '✓ copied';
        code.style.color = '#22c55e';
        code.style.background = 'rgba(34,197,94,0.12)';

        setTimeout(() => {
          code.textContent = original;
          code.style.color = originalColor;
          code.style.background = '';
        }, 1400);
      }).catch(() => {
        // Clipboard not available — silently ignore
      });
    });
  });


  // ── Keyboard navigation ──────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
    }
  });


  // ── Add selected row style dynamically ──────────────────
  const style = document.createElement('style');
  style.textContent = `
    .entity-table tbody tr.selected td {
      background: rgba(245,158,11,0.07) !important;
      color: #e8eaf0 !important;
    }
  `;
  document.head.appendChild(style);


  // ── Topbar shadow on scroll ──────────────────────────────
  const topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      topbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
    } else {
      topbar.style.boxShadow = '';
    }
  }, { passive: true });


  // ── Lightbox for screenshots ────────────────────────────
  // Create lightbox modal
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close lightbox">✕</button>
      <img class="lightbox-image" src="" alt="Enlarged screenshot">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  // Make all screenshot images clickable
  document.querySelectorAll('.screenshot-card img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightboxCaption.textContent = img.alt || 'Screenshot';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking close button
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  console.log('%cWorkCore Docs v1.0', 'color: #f59e0b; font-family: monospace; font-size: 14px; font-weight: bold;');
  console.log('%cJob-First System with Inventory Intelligence', 'color: #8b92a8; font-family: monospace; font-size: 11px;');

});
