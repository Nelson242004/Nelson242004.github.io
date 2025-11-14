
// ======================================
// BioFast - Lógica básica del perfil
// Ruta: clientes/_plantilla/script.js
// ======================================

// Por ahora solo mostramos un mensaje en consola
// para verificar que el JS carga correctamente.
// Podés agregar aquí tracking, eventos de click, etc.
console.log("BioFast: perfil de cliente cargado correctamente.");

// EJEMPLO: si quisieras trackear clics en los botones,
// podrías hacer algo como esto:

const buttons = document.querySelectorAll(".link-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Click en botón:", btn.textContent.trim());
    // Aquí podrías enviar datos a Google Analytics / Pixel, etc.
  });
});
