function copiarTodoCuenta1() {
  var datos = "Razón Social: SCHUSSLER S.A.\n" +
              "RUT: 78.813.720-6\n" +
              "Banco: Banco de Chile\n" +
              "Tipo de Cuenta: Cuenta Corriente\n" +
              "Número de Cuenta: 225-00338-04\n" +
              "Correo: cobranzas@schussler.cl";

  ejecutarCopia(datos, "mensaje1");
}

function copiarTodoCuenta2() {
  var datos = "Razón Social: PLASTICOS CORONEL LTDA.\n" +
              "RUT: 83.400.300-7\n" +
              "Banco: BANCO SANTANDER\n" +
              "Tipo de Cuenta: Cuenta Corriente\n" +
              "Número de Cuenta: 11-06264-4\n" +
              "Correo: ventas@plasticoscoronel.cl";

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
