/**
 * Main JavaScript for Mubashar Sharif SEO Portfolio
 * Fast, dependency-free vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close on nav click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Case Studies Category Filter Pills
  const filterPills = document.querySelectorAll('.filter-pill');
  const caseCards = document.querySelectorAll('.case-card[data-category]');

  if (filterPills.length > 0 && caseCards.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        // Toggle active class
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const category = pill.getAttribute('data-filter');

        caseCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  }

  // 4. Proof Screenshot Lightbox
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const proofCards = document.querySelectorAll('.proof-card');

  if (lightbox && lightboxImg && proofCards.length > 0) {
    proofCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.proof-img');
        const caption = card.querySelector('.proof-caption')?.textContent || '';
        const highResSrc = card.getAttribute('data-full-img') || img?.src;

        if (img && highResSrc) {
          lightboxImg.src = highResSrc;
          lightboxImg.alt = img.alt;
          if (lightboxCaption) lightboxCaption.textContent = caption;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 5. Copy Link to Clipboard
  const copyBtns = document.querySelectorAll('.btn-copy-link');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Copied!</span>';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });

  // 6. Smooth Scroll for Table of Contents Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 7. Operative Search Bar — scroll to case studies
  const searchBtn = document.querySelector('.semrush-search-btn');
  const searchInput = document.getElementById('domainAuditInput');
  const caseStudiesSection = document.getElementById('case-studies-preview');

  function handleSearchAction(e) {
    if (caseStudiesSection) {
      e.preventDefault();
      caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      caseStudiesSection.style.transition = 'box-shadow 0.4s ease';
      caseStudiesSection.style.boxShadow = '0 0 0 4px rgba(0, 221, 175, 0.35)';
      setTimeout(() => {
        caseStudiesSection.style.boxShadow = 'none';
      }, 1800);
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearchAction);
  }
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearchAction(e);
    });
  }
});


// --- Semrush Stats Ladder Automated Cycle Animation ---
(function initStatsLadderCycle() {
  const ladderItems = document.querySelectorAll('.stats-ladder .ladder-item');
  const descItems = document.querySelectorAll('.stats-descriptions-col .stat-desc-item');
  
  if (!ladderItems.length || !descItems.length) return;
  
  let currentIndex = 1; // start at Michigan Outdoor Sports item
  let intervalId = null;
  let isHovered = false;

  function setActiveStat(idx) {
    ladderItems.forEach((item, i) => {
      if (i === idx) {
        item.classList.remove('dim');
        item.classList.add('active-card');
      } else {
        item.classList.remove('active-card');
        item.classList.add('dim');
      }
    });

    descItems.forEach((desc, i) => {
      if (i === idx) {
        desc.classList.add('active-desc');
      } else {
        desc.classList.remove('active-desc');
      }
    });
  }

  function nextStat() {
    if (isHovered) return;
    currentIndex = (currentIndex + 1) % ladderItems.length;
    setActiveStat(currentIndex);
  }

  intervalId = setInterval(nextStat, 2800);

  // Allow user hover/click to inspect
  ladderItems.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      isHovered = true;
      currentIndex = idx;
      setActiveStat(idx);
    });
    item.addEventListener('mouseleave', () => {
      isHovered = false;
    });
    item.addEventListener('click', () => {
      currentIndex = idx;
      setActiveStat(idx);
    });
  });
})();
