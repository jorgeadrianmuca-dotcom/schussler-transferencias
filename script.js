function copiarTodoCuenta1() {
  var datos = "SCHUSSLER S.A.\n" +
              "78.813.720-6\n" +
              "Banco de Chile\n" +
              "Cuenta Corriente\n" +
              "225-00338-04\n" +
              "cobranzas@schussler.cl";

  ejecutarCopia(datos, "mensaje1");
}

function copiarTodoCuenta2() {
  var datos = "PLASTICOS CORONEL LTDA.\n" +
              "83.400.300-7\n" +
              "BANCO SANTANDER\n" +
              "Cuenta Corriente\n" +
              "11-06264-4\n" +
              "ventas@plasticoscoronel.cl";

  ejecutarCopia(datos, "mensaje2");
}

function ejecutarCopia(texto, idMensaje) {
  var aux = document.createElement("textarea");
  aux.value = texto;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  var msj = document.getElementById(idMensaje);
  if (msj) {
    msj.style.display = "block";
    setTimeout(function() {
      msj.style.display = "none";
    }, 2000);
  }
}
