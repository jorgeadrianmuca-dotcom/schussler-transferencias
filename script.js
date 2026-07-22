function copiarTexto(texto, idMensaje) {
  navigator.clipboard.writeText(texto).then(() => {
    const mensaje = document.getElementById(idMensaje);
    mensaje.style.display = "block";
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 2000);
  });
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
