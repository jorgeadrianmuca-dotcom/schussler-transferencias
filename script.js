function copiar(texto, elemento){

    navigator.clipboard.writeText(texto);

    document.getElementById("toast").innerHTML = "Copiado correctamente";
    document.getElementById("toast").classList.add("mostrar");


    setTimeout(function(){

        document.getElementById("toast").classList.remove("mostrar");

    },2000);

}



function copiarTodo(){

    let texto =
`SCHUSSLER S.A.
78.813.720-6
Banco de Chile
Cuenta Corriente
N225-00338-04
cobranzas@schussler.cl`;


    navigator.clipboard.writeText(texto);


    document.getElementById("toast").innerHTML = "Datos copiados correctamente";
    document.getElementById("toast").classList.add("mostrar");


    setTimeout(function(){

        document.getElementById("toast").classList.remove("mostrar");

    },2000);

}
