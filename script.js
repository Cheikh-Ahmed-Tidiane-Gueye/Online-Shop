window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 9) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

// Récupérer tous les liens dans la barre de navigation
var navLinks = document.querySelectorAll('#navbar .navbar-nav a');

// Ajouter un écouteur d'événement click à chaque lien
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Fermer l'offcanvas en définissant son attribut aria-hidden à true
    var offcanvas = document.querySelector('#offcanvasExample');
    offcanvas.setAttribute('aria-hidden', 'true');
    
    // Si le lien cliqué est le lien qui ouvre l'offcanvas, réinitialiser son attribut aria-expanded à false
    var menuToggler = document.querySelector('#menu-toggler');
    if (link === menuToggler) {
      menuToggler.setAttribute('aria-expanded', 'false');
    }
  });
});


