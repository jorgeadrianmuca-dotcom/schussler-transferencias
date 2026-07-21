
function copiarTexto() {
  const textArea = document.getElementById("texto");
  const mensaje = document.getElementById("mensaje");

  // Selecciona el contenido del área de texto
  textArea.select();
  textArea.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Usa la API moderna del portapapeles
  navigator.clipboard.writeText(textArea.value).then(() => {
    // Muestra una confirmación visual breve
    mensaje.style.display = "block";
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  }).catch(err => {
    console.error("Error al copiar: ", err);
  });
}
