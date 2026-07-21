function copiarTodo(){

let texto = 
`SCHUSSLER S.A.
78.813.720-6
Banco de Chile
Cuenta Corriente
N225-00338-04
cobranzas@schussler.cl`;

navigator.clipboard.writeText(texto);

document.getElementById("toast").classList.add("mostrar");

setTimeout(()=>{
document.getElementById("toast").classList.remove("mostrar");
},2000);

}
