/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperaturaF;
var temperaturaC;

function FahrenheitCentigrados () 
{ 
    temperaturaF = document.getElementById("Temperatura").value;
    temperaturaF = parseInt(temperaturaF); // ℉ - 32 / 1.8 : formula de conversion F a C.
    temperaturaC = (temperaturaF - 32) / 1.8;
    alert(temperaturaF + " F° son " + temperaturaC + " C°.");

    

	
}

function CentigradosFahrenheit () 
{
    temperaturaC = document.getElementById("Temperatura").value;
    temperaturaC = parseInt(temperaturaC); // ℉ =℃ * 1.8000 + 32.00
    temperaturaF = (temperaturaC * 1.8) + 32;
    alert(temperaturaC + " C° son " + temperaturaF + " F°.");
  




	
}
