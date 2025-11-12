const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Buscar el header activo actual
    const currentlyActive = document.querySelector('.accordion-header.active');
    
    // Si existe otro abierto y no es este, cerrarlo
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove('active');
      currentlyActive.nextElementSibling.classList.remove('open');
    }

    // Alternar el header clickeado (abrir/cerrar)
    header.classList.toggle('active');
    header.nextElementSibling.classList.toggle('open');
  });
});
