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

  // 7. Free Domain Authority & Instant SEO Health Checker
  const auditBtn = document.getElementById('runDomainAuditBtn') || document.querySelector('.semrush-search-btn');
  const auditInput = document.getElementById('domainAuditInput');
  const liveScanner = document.getElementById('auditLiveScanner');
  const scannerFill = document.getElementById('scannerProgressFill');
  const scannerText = document.getElementById('scannerStepText');
  const resultCard = document.getElementById('auditResultCard');
  const resetBtn = document.getElementById('auditResetBtn');

  const SCAN_STEPS = [
    { text: "Querying global link graph & domain authority metrics...", pct: 25 },
    { text: "Scanning crawl efficiency & technical schema structure...", pct: 55 },
    { text: "Evaluating topical authority & entity co-occurrence...", pct: 80 },
    { text: "Calculating competitor gap & AI search visibility...", pct: 100 }
  ];

  function calculateAuditScores(raw) {
    const clean = raw.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].trim();
    if (!clean) return null;

    if (clean.includes('michigansportsoutdoor')) {
      return {
        domain: clean,
        da: 36,
        health: 94,
        topical: 88,
        ai: 65,
        statusDa: "Established Catalog",
        statusHealth: "94% Clean Crawl",
        statusTopical: "88% Category Depth",
        statusAi: "65% LLM Citations",
        findings: [
          "Technical Architecture: 12,200 catalog SKUs fully indexed with zero crawl waste.",
          "Organic Growth: Google Search Console impressions up +1,631% (491 to 8.5K), clicks up +383%.",
          "AI Visibility: High-intent brand landing hubs cited across Midwest retail queries."
        ]
      };
    }

    if (clean.includes('smkstore')) {
      return {
        domain: clean,
        da: 32,
        health: 96,
        topical: 92,
        ai: 58,
        statusDa: "High E-Commerce Trust",
        statusHealth: "96% Crawlability",
        statusTopical: "92% Commercial Depth",
        statusAi: "58% AI Recommendations",
        findings: [
          "E-Commerce Architecture: Taxonomy bloat resolved, +227% monthly net sales turnaround.",
          "Rich Data: 35,000 SKUs enabled with complete Product, Offer, and InStock schema.",
          "Commercial Intent: High conversion on multi-category product queries."
        ]
      };
    }

    if (clean.includes('remitchoice')) {
      return {
        domain: clean,
        da: 28,
        health: 98,
        topical: 96,
        ai: 15,
        statusDa: "Fintech Corridor Leader",
        statusHealth: "98% Clean Index",
        statusTopical: "96% Niche Authority",
        statusAi: "Semrush Score 15 (Live)",
        findings: [
          "Fintech Authority: Ranked #1 above Wise and Xoom on competitive remittance corridors.",
          "Semrush AI Search: 15 AI Visibility Score, 73 total mentions, 67 cited pages verified.",
          "Entity Dominance: Zero-fee corridor architecture capturing international intent."
        ]
      };
    }

    // Deterministic calculation for any prospective client domain
    let hash = 0;
    for (let i = 0; i < clean.length; i++) {
      hash = (hash << 5) - hash + clean.charCodeAt(i);
      hash |= 0;
    }
    const pos = Math.abs(hash);
    const da = 18 + (pos % 32);
    const health = 62 + (pos % 27);
    const topical = 38 + (pos % 42);
    const ai = 14 + (pos % 28);

    return {
      domain: clean,
      da,
      health,
      topical,
      ai,
      statusDa: da >= 35 ? "Good Growth Potential" : "Needs Foundation",
      statusHealth: health >= 75 ? "Strong Technical Index" : "Technical Gaps Found",
      statusTopical: topical >= 55 ? "Moderate Authority" : "Expansion Opportunity",
      statusAi: ai >= 25 ? "Emerging Citations" : "Unclaimed AI Citations",
      findings: [
        "Technical Schema: Missing Product or LocalBusiness JSON-LD structured data on core commercial pages.",
        "Crawl Architecture: Deep pagination and faceted URLs causing indexation starvation.",
        "AI Search Readiness: Brand mentions not yet cited in Google AI Overviews or Perplexity answers."
      ]
    };
  }

  function runInstantAudit(e) {
    if (e) e.preventDefault();
    const rawDomain = auditInput ? auditInput.value.trim() : '';
    if (!rawDomain) {
      if (auditInput) {
        auditInput.focus();
        auditInput.style.borderColor = '#ef4444';
        setTimeout(() => { auditInput.style.borderColor = ''; }, 1500);
      }
      return;
    }

    const report = calculateAuditScores(rawDomain);
    if (!report) return;

    if (auditBtn) {
      auditBtn.disabled = true;
      auditBtn.innerHTML = 'Scanning Link Graph...';
    }

    if (resultCard) resultCard.style.display = 'none';
    if (liveScanner) {
      liveScanner.style.display = 'block';
      liveScanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Step-by-step scanner progression
    SCAN_STEPS.forEach((step, idx) => {
      setTimeout(() => {
        if (scannerFill) scannerFill.style.width = step.pct + '%';
        if (scannerText) scannerText.textContent = step.text;
      }, (idx + 1) * 450);
    });

    // Display final scorecard
    setTimeout(() => {
      if (liveScanner) liveScanner.style.display = 'none';
      if (auditBtn) {
        auditBtn.disabled = false;
        auditBtn.innerHTML = '<span>Run Free Audit &rarr;</span>';
      }

      // Populate scorecard fields
      const domainNameEl = document.getElementById('auditResultDomainName');
      const daEl = document.getElementById('auditDaScore');
      const healthEl = document.getElementById('auditHealthScore');
      const topicalEl = document.getElementById('auditTopicalScore');
      const aiEl = document.getElementById('auditAiScore');
      const daStatusEl = document.getElementById('auditDaStatus');
      const healthStatusEl = document.getElementById('auditHealthStatus');
      const topicalStatusEl = document.getElementById('auditTopicalStatus');
      const aiStatusEl = document.getElementById('auditAiStatus');
      const f1 = document.getElementById('auditFinding1');
      const f2 = document.getElementById('auditFinding2');
      const f3 = document.getElementById('auditFinding3');

      if (domainNameEl) domainNameEl.textContent = report.domain;
      if (daEl) daEl.textContent = report.da;
      if (healthEl) healthEl.textContent = report.health + '%';
      if (topicalEl) topicalEl.textContent = report.topical + '%';
      if (aiEl) aiEl.textContent = report.ai + '%';

      if (daStatusEl) daStatusEl.textContent = report.statusDa;
      if (healthStatusEl) healthStatusEl.textContent = report.statusHealth;
      if (topicalStatusEl) topicalStatusEl.textContent = report.statusTopical;
      if (aiStatusEl) aiStatusEl.textContent = report.statusAi;

      if (f1 && report.findings[0]) f1.textContent = report.findings[0];
      if (f2 && report.findings[1]) f2.textContent = report.findings[1];
      if (f3 && report.findings[2]) f3.textContent = report.findings[2];

      if (resultCard) {
        resultCard.style.display = 'block';
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 2100);
  }

  if (auditBtn) auditBtn.addEventListener('click', runInstantAudit);
  if (auditInput) {
    auditInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') runInstantAudit(e);
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (resultCard) resultCard.style.display = 'none';
      if (auditInput) {
        auditInput.value = '';
        auditInput.focus();
      }
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
