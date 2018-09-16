/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    var num2;
    var num3;
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num3 = num1 + num2 + num3;
    alert("La suma de sus precios da $" + num3 + ".");
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num3 = (num1 + num2 + num3) / 3;
    alert("El promedio de los valores que ingreso es de $" + num3 + ".");

	
}
function PrecioFinal () 
{
    var num3;
    var num2;
    var num1;
    var num4;
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;
    num1 = parseInt(num1);

    num2 = parseInt(num2);

    num3 = parseInt(num3);
    num3 = num1 + num2 + num3;
    num4 = num3 * 0.21;
    num4 = num3 + num4;
    alert("El precio final (con I.V.A. 21%) es $" + num4 + ".");
	
}