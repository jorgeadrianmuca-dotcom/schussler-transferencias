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
  const datos = "SCHUSSLER S.A.\n" +
                "78.813.720-6\n" +
                "Banco de Chile\n" +
                "Cuenta Corriente\n" +
                "225-00338-04\n" +
                "cobranzas@schussler.cl";

  navigator.clipboard.writeText(datos);
  mostrarMensaje();
}
