/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


var ancho;
var largo;

function Rectangulo () 
{
    var perimetro;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    perimetro = [(largo * 2) + (ancho * 2)] * 3;
    alert("Deberá comprar " + perimetro + " metros de alambre para rodear su terreno con 3 hilos de alambre."); 



}
function Circulo () 
{
    var radio;
    var circunferencia;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    circunferencia = [(radio * 2) * 3.14] * 3;
    alert("Deberá comprar " + circunferencia + " metros de alambre para rodear su terreno con 3 hilos de alambre.");



	
}
function Materiales () 
{
    var bolsacemento = 2;  
    var bolsacal = 3;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    bolsacemento = (ancho * largo) * bolsacemento;
    bolsacal = (ancho * largo) * bolsacal;
    alert("Usted necesita " + bolsacemento + " bolsas de cemento y "  + bolsacal + "  bolsas de cal para realizar el contrapiso de su terreno rectangular o cuadrado.");

   


	
}