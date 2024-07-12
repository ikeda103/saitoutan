document.addEventListener('DOMContentLoaded', () => {
  var header = document.querySelector('.header');
  var lastScrollTop = 0;
  var delta = 1; // 3px の差異で変更
  var didScroll;

  window.addEventListener('scroll', function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var scrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - scrollTop) <= delta) {
      return;
    }

    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
      // スクロールダウン
      header.classList.remove('visible');
      header.classList.add('hidden');
    } else {
      // スクロールアップ
      if (scrollTop + window.innerHeight < document.body.scrollHeight) {
        header.classList.remove('hidden');
        header.classList.add('visible');
      }
    }

    lastScrollTop = scrollTop;
  }

  const headerLogo = document.querySelector('.header__logo');
  headerLogo.addEventListener('click', () => {
    if (header.classList.contains('hidden')) {
      header.classList.remove('hidden');
      header.classList.add('visible');
    } else {
      window.location.href = '/';
    }
  });
});
