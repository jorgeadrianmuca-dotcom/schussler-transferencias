let temporizador;

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) {
    mensaje.style.display = "block";
    
    clearTimeout(temporizador);
    
    temporizador = setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  }
}

function copiarDato(texto) {
  navigator.clipboard.writeText(texto);
  mostrarMensaje();
}

function copiarTodo() {
  const datos = `SCHUSSLER S.A.
78.813.720-6
Banco de Chile
Cuenta Corriente
N225-00338-04
cobranzas@schussler.cl`;

  navigator.clipboard.writeText(datos);
  mostrarMensaje();
}
