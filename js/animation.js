document.addEventListener('DOMContentLoaded', () => {
  // キービジュアルのテキストアニメーション
  const lines = document.querySelectorAll('.key-visual__text .line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('show');
    }, index * 1000);
  });

  // セクションごとのふわっと表示アニメーション
  const fadeInSections = document.querySelectorAll('.fade-in-section');

  function checkFadeIn() {
    fadeInSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add('show');
      }
    });
  }

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkFadeIn();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);
  checkFadeIn(); // 初回チェック
});
