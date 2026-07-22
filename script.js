function copiarTexto(texto, idMensaje) {
  // Método compatible universal para copiar al portapapeles
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(() => mostrarMensaje(idMensaje));
  } else {
    // Alternativa de respaldo para navegadores o entornos móviles restrictivos
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      mostrarMensaje(idMensaje);
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
    document.body.removeChild(textArea);
  }
}

function mostrarMensaje(idMensaje) {
  const mensaje = document.getElementById(idMensaje);
  if (mensaje) {
    mensaje.style.display = "block";
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  }
}

function copiarTodoCuenta1() {
  const datos = `Razón Social: SCHUSSLER S.A.
RUT: 78.813.720-6
Banco: Banco de Chile
Tipo de Cuenta: Cuenta Corriente
Número de Cuenta: 225-00338-04
Correo: cobranzas@schussler.cl`;

  copiarTexto(datos, "mensaje1");
}

function copiarTodoCuenta2() {
  const datos = `Razón Social: PLASTICOS CORONEL LTDA.
RUT: 83.400.300-7
Banco: BANCO SANTANDER
Tipo de Cuenta: Cuenta Corriente
Número de Cuenta: 11-06264-4
Correo: ventas@plasticoscoronel.cl`;

  copiarTexto(datos, "mensaje2");
}
