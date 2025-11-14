// ======================================
// BioFast - Pizzería La Napolitana
// JS específico de este perfil
// ======================================

// Mensaje simple para saber que el script está cargado
console.log("BioFast: perfil de Pizzería La Napolitana cargado.");

// Ejemplo: loguear clicks en los botones (para futuro tracking)
const buttons = document.querySelectorAll(".link-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Click en botón:", btn.textContent.trim());
    // Aquí podrías enviar datos a Google Analytics, Pixel, etc.
  });
});
