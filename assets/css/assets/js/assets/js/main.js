// ==========================
// BioFast - scripts de la landing
// Ruta: assets/js/main.js
// ==========================

// Este pequeño script solo actualiza el año
// en el pie de página de la landing.
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
