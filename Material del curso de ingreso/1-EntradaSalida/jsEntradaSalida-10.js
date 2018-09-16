/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{

    var importe;
    var importefinal;
    importe = document.getElementById("importe").value;
    importe = parseInt(importe);
    importefinal =  importe * 0.25;
    importefinal =  importe - importefinal;
    document.getElementById("resultado").value = importefinal;



	
}
