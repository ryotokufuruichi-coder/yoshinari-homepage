/* ===================================
   吉成株式会社 - メインJavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', function () {

  // ---- ヘッダー スクロール制御 ----
  const header = document.querySelector('.site-header');
  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- ハンバーガーメニュー ----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // アニメーション
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // ナビリンクをクリックしたら閉じる
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ---- スクロールアニメーション ----
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  // ---- アクティブナビ ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- お問い合わせフォーム (contact.html のみ) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.form-submit');
      const successMsg = document.getElementById('formSuccess');
      const errorMsg = document.getElementById('formError');

      submitBtn.disabled = true;
      submitBtn.textContent = '送信中...';

      // Formspree endpoint (後でユーザーが自分のIDに変更)
      const formspreeEndpoint = contactForm.getAttribute('data-endpoint');

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        } else {
          throw new Error('送信失敗');
        }
      } catch (err) {
        if (errorMsg) errorMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = '送信する';
      }
    });
  }

});
