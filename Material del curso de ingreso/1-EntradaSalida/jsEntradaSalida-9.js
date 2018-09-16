/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo
    var incremento
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseInt(sueldo);
    incremento = sueldo * 0.1;
    incremento = sueldo + incremento;
    document.getElementById("resultado").value = incremento;



	
}
