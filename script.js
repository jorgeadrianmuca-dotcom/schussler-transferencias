let temporizador;

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) {
    // Hace visible el mensaje en el instante del clic
    mensaje.style.display = "block";
    
    // Reinicia el temporizador si vuelves a hacer clic rápido
    clearTimeout(temporizador);
    
    // Oculta el mensaje automáticamente tras 2 segundos
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
