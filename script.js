window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 9) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});