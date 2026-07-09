/**
 * Deepak Electrical Industries (India) - Sunspot
 * Main JavaScript
 */

(function() {
  'use strict';

  // Map product enquiry slugs → contact form <option> values
  var PRODUCT_SLUG_MAP = {
    'room-heater': 'room-heater',
    'fan-heater': 'fan-heater',
    'exhaust-fan': 'exhaust-fan',
    'axial-fan': 'axial-fan',
    'fresh-air-high-speed': 'fresh-air-high-speed',
    'fresh-air-3-leaf': 'fresh-air-3-leaf',
    'trans-air-fan': 'trans-air-fan',
    'table-fan': 'table-fan',
    'wall-fan': 'wall-fan',
    'cooler-fan': 'cooler-fan',
    'industrial-fan': 'industrial-fan',
    'industrial-exhaust': 'industrial-fan',
    'heavy-duty-fan': 'heavy-duty-fan',
    'heavy-duty-exhaust': 'heavy-duty-fan',
    'immersion-heater': 'immersion-heater',
    'fountain-pump': 'fountain-pump',
    'cooler-pump': 'cooler-pump',
    'flexi-fan': 'flexi-fan',
    'heating-elements': 'heating-elements',
    'multiple': 'multiple',
    'other': 'other'
  };

  function i18n(key, fallback) {
    if (window.SUNSPOT_I18N && typeof window.SUNSPOT_I18N.t === 'function') {
      var v = window.SUNSPOT_I18N.t(key);
      if (v != null && v !== '') return v;
    }
    return fallback;
  }

  function setError(field, message) {
    field.style.borderColor = '#e74c3c';
    var existing = field.parentNode.querySelector('.error-msg');
    if (existing) {
      existing.textContent = message;
      return;
    }
    var err = document.createElement('span');
    err.className = 'error-msg';
    err.setAttribute('role', 'alert');
    err.style.color = '#e74c3c';
    err.style.fontSize = '0.8rem';
    err.style.marginTop = '4px';
    err.style.display = 'block';
    err.textContent = message;
    field.parentNode.appendChild(err);
  }

  function clearError(field) {
    field.style.borderColor = '';
    var errorMsg = field.parentNode.querySelector('.error-msg');
    if (errorMsg) errorMsg.remove();
  }

  // === Mobile Menu ===
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.setAttribute('aria-controls', 'main-nav');
    if (!navMenu.id) navMenu.id = 'main-nav';
    navMenu.setAttribute('aria-hidden', 'true');

    function setMenuOpen(isOpen) {
      navMenu.classList.toggle('open', isOpen);
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.classList.toggle('nav-open', isOpen);

      var spans = mobileToggle.querySelectorAll('span');
      if (spans.length >= 3) {
        if (isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      }
    }

    mobileToggle.addEventListener('click', function() {
      setMenuOpen(!navMenu.classList.contains('open'));
    });

    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMenuOpen(false);
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenuOpen(false);
      }
    });
  }

  // === Header scroll effect ===
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // === Product Filter (no race: CSS class, no delayed display:none) ===
  var filterBtns = document.querySelectorAll('.filter-btn');
  var productCards = document.querySelectorAll('.products-grid .product-card, .product-filter + .products-grid .product-card');
  if (productCards.length === 0) {
    productCards = document.querySelectorAll('.products-grid .product-card');
  }

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');

        filterBtns.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        productCards.forEach(function(card) {
          var match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.classList.toggle('is-filtered-out', !match);
          // Keep visible for accessibility when filtered out
          card.setAttribute('aria-hidden', match ? 'false' : 'true');
        });
      });
    });

    filterBtns.forEach(function(b) {
      b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false');
    });
  }

  // === Prefill product from ?product= query (contact page) ===
  var productSelect = document.getElementById('product');
  if (productSelect) {
    try {
      var params = new URLSearchParams(window.location.search);
      var productParam = params.get('product');
      if (productParam) {
        var mapped = PRODUCT_SLUG_MAP[productParam] || productParam;
        var hasOption = Array.prototype.some.call(productSelect.options, function(opt) {
          return opt.value === mapped;
        });
        productSelect.value = hasOption ? mapped : 'other';
      }
    } catch (err) {
      // URLSearchParams unavailable — ignore
    }
  }

  // === Contact Form: validate + submit via FormSubmit ===
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var form = this;
      var isValid = true;
      var requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          setError(field, i18n('contact.required', 'This field is required'));
        } else {
          clearError(field);
        }
      });

      var emailField = form.querySelector('[type="email"]');
      if (emailField && emailField.value.trim()) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
          isValid = false;
          setError(emailField, i18n('contact.email.invalid', 'Please enter a valid email address'));
        }
      }

      var phoneField = form.querySelector('[name="phone"]');
      if (phoneField && phoneField.value.trim()) {
        var digits = phoneField.value.replace(/\D/g, '');
        // Accept 10-digit Indian mobiles, optional leading 91 / +91
        var phoneOk = /^(?:91)?[6-9]\d{9}$/.test(digits) || /^\d{10,15}$/.test(digits);
        if (!phoneOk) {
          isValid = false;
          setError(phoneField, i18n('contact.phone.invalid', 'Please enter a valid 10-digit phone number'));
        }
      }

      if (!isValid) return;

      var submitBtn = form.querySelector('[type="submit"]');
      var originalBtnText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = i18n('contact.sending', 'Sending…');
      }

      // Remove prior alerts
      form.querySelectorAll('.form-status').forEach(function(el) { el.remove(); });

      var formData = new FormData(form);
      // FormSubmit helpers
      formData.append('_subject', 'Sunspot website enquiry from ' + (formData.get('name') || 'visitor'));
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      fetch('https://formsubmit.co/ajax/sunspotgtx@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
        .then(function(res) {
          if (!res.ok) throw new Error('Form service returned ' + res.status);
          return res.json();
        })
        .then(function() {
          showFormStatus(form, true,
            i18n('contact.success', '✓ Thank you for your enquiry! We will get back to you within 24 hours.'));
          form.reset();
        })
        .catch(function() {
          // Fallback: open WhatsApp with prefilled enquiry so the lead is never lost
          var name = form.querySelector('[name="name"]').value || '';
          var phone = form.querySelector('[name="phone"]').value || '';
          var email = form.querySelector('[name="email"]').value || '';
          var city = form.querySelector('[name="city"]') ? form.querySelector('[name="city"]').value : '';
          var product = form.querySelector('[name="product"]');
          var productLabel = product && product.selectedIndex >= 0
            ? product.options[product.selectedIndex].text
            : '';
          var message = form.querySelector('[name="message"]').value || '';
          var placeholderOpt = i18n('contact.form.product.placeholder', 'Select a product category');
          var waText = [
            i18n('contact.wa.prefill', 'Hello, I would like to enquire about your products.'),
            'Name: ' + name,
            'Phone: ' + phone,
            'Email: ' + email,
            city ? 'City: ' + city : '',
            productLabel && productLabel !== placeholderOpt ? 'Product: ' + productLabel : '',
            'Message: ' + message
          ].filter(Boolean).join('\n');

          showFormStatus(form, false,
            i18n('contact.fail', 'We could not send email automatically. Opening WhatsApp so you can send this enquiry now…'));
          window.open(
            'https://wa.me/919268708058?text=' + encodeURIComponent(waText),
            '_blank',
            'noopener'
          );
        })
        .finally(function() {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        });
    });

    contactForm.querySelectorAll('input, textarea, select').forEach(function(field) {
      field.addEventListener('input', function() {
        clearError(this);
      });
    });
  }

  function showFormStatus(form, success, text) {
    var status = document.createElement('div');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.style.background = success ? '#d4edda' : '#fff3cd';
    status.style.color = success ? '#155724' : '#856404';
    status.style.padding = '16px';
    status.style.borderRadius = '8px';
    status.style.marginBottom = '20px';
    status.style.textAlign = 'center';
    status.textContent = text;
    form.insertBefore(status, form.firstChild);
    setTimeout(function() {
      if (status.parentNode) status.remove();
    }, 8000);
  }

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Language toggle is handled by js/i18n.js

  // === Scroll animations — CSS owns initial opacity; JS only adds class ===
  if ('IntersectionObserver' in window) {
    var prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.product-card, .feature-card, .review-card, .value-card').forEach(function(el) {
        el.classList.add('will-animate');
        observer.observe(el);
      });
    }
  }

})();
