/* Index Page JavaScript Functions */

// Newsletter Form Submission Handler
function handleNewsletterSubmission(form) {
  return (function (form) {
    Y.use('squarespace-form-submit', 'node', function usingFormSubmit(Y) {
      (new Y.Squarespace.FormSubmit(form)).submit({
        formId: '68af14e99f2df910c943bdb6',
        collectionId: '68ac87dace20391d327e51c4',
        objectName: '8baea393dc32e22c05fc'
      });
    });
    return false;
  })(form);
}

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  
  if (menu && hamburger) {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
}

// Smooth Scroll Function
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Language Picker Enhancement
function enhanceLanguagePicker() {
  const languagePicker = document.querySelector('#multilingual-language-picker-desktop');
  if (languagePicker && window.languageManager) {
    // Ensure language picker is properly initialized
    window.languageManager.setupLanguagePicker();
  }
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language picker
  enhanceLanguagePicker();
  
  // Add mobile menu event listeners
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
  
  // Add smooth scroll to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScrollTo(target);
    });
  });
  
  // Initialize form handlers
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleNewsletterSubmission(this);
    });
  }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    handleNewsletterSubmission,
    toggleMobileMenu,
    smoothScrollTo,
    enhanceLanguagePicker
  };
}
