function copiarDato(texto) {
  navigator.clipboard.writeText(texto);
}

function copiarTodo() {
  const datos = `Razón Social: SCHUSSLER S.A.
RUT: 78.813.720-6
Banco: Banco de Chile
Tipo de Cuenta: Cuenta Corriente
Número de Cuenta: N225-00338-04
Correo: cobranzas@schussler.cl`;

  navigator.clipboard.writeText(datos);
}
