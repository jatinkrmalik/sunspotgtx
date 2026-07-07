/**
 * Deepak Electrical Industries (India) - Sunspot
 * Main JavaScript
 */

(function() {
  'use strict';

  // === Mobile Menu ===
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
      this.classList.toggle('active');
      // Animate hamburger
      const spans = this.querySelectorAll('span');
      if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
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
    });
  }

  // === Product Filter ===
  var filterBtns = document.querySelectorAll('.filter-btn');
  var productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');

        // Filter cards
        productCards.forEach(function(card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            card.style.opacity = '1';
          } else {
            card.style.opacity = '0';
            setTimeout(function() {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // === Contact Form Validation ===
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var isValid = true;
      var requiredFields = this.querySelectorAll('[required]');

      requiredFields.forEach(function(field) {
        var errorMsg = field.parentNode.querySelector('.error-msg');
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#e74c3c';
          if (!errorMsg) {
            var err = document.createElement('span');
            err.className = 'error-msg';
            err.style.color = '#e74c3c';
            err.style.fontSize = '0.8rem';
            err.style.marginTop = '4px';
            err.style.display = 'block';
            err.textContent = 'This field is required';
            field.parentNode.appendChild(err);
          }
        } else {
          field.style.borderColor = '';
          if (errorMsg) errorMsg.remove();
        }
      });

      // Email validation
      var emailField = this.querySelector('[type="email"]');
      if (emailField && emailField.value) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = '#e74c3c';
          var errorMsg = emailField.parentNode.querySelector('.error-msg');
          if (!errorMsg) {
            var err = document.createElement('span');
            err.className = 'error-msg';
            err.style.color = '#e74c3c';
            err.style.fontSize = '0.8rem';
            err.style.marginTop = '4px';
            err.style.display = 'block';
            err.textContent = 'Please enter a valid email address';
            emailField.parentNode.appendChild(err);
          }
        }
      }

      // Phone validation
      var phoneField = this.querySelector('[name="phone"]');
      if (phoneField && phoneField.value) {
        var phoneRegex = /^[+]?[\d\s-]{10,15}$/;
        if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
          isValid = false;
          phoneField.style.borderColor = '#e74c3c';
        }
      }

      if (isValid) {
        // Show success message
        var successMsg = document.createElement('div');
        successMsg.style.background = '#d4edda';
        successMsg.style.color = '#155724';
        successMsg.style.padding = '16px';
        successMsg.style.borderRadius = '8px';
        successMsg.style.marginBottom = '20px';
        successMsg.style.textAlign = 'center';
        successMsg.innerHTML = '✓ Thank you for your enquiry! We will get back to you within 24 hours.';
        this.insertBefore(successMsg, this.firstChild);
        this.reset();

        // Remove success message after 5 seconds
        setTimeout(function() {
          successMsg.remove();
        }, 5000);
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('input, textarea, select').forEach(function(field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        var errorMsg = this.parentNode.querySelector('.error-msg');
        if (errorMsg) errorMsg.remove();
      });
    });
  }

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === Language toggle placeholder ===
  var langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      alert('हिंदी संस्करण जल्द ही उपलब्ध होगा। / Hindi version coming soon.');
    });
  }

  // === Scroll animations (Intersection Observer) ===
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .feature-card, .review-card, .value-card').forEach(function(el) {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

})();
