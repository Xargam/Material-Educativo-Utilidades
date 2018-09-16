function Mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numero = 0;
	while(contador < 5)
	{
		contador++;
		numero = prompt("Ingrese el número.");
		numero = parseInt(numero);
		acumulador += numero;
	}
	document.getElementById('suma').value = acumulador;
    document.getElementById('promedio').value = acumulador / contador;





}//FIN DE LA FUNCIÓN