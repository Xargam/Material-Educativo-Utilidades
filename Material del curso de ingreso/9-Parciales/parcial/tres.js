function Mostrar()
{
    var largo;
    var ancho;
    var resultado;
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    resultado = (largo * 2 + ancho * 2 ) * 3;
    resultado = parseInt(resultado);
    alert("Usted necesita "+resultado+"m de hilo de alambre para rodear sus terreno 3 veces."); 


}
