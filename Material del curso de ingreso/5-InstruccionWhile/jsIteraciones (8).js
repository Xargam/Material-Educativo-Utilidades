function Mostrar()
{

	var numero;
	var positivo = 0;
	var negativo = 1;
	while(true)
	{
		// Tomo numeros.
		numero = prompt("Ingrese tantos números como desee y presione cancelar para dejar de ingresar.");
		// Verifico que el usuario haya querido finalizar.
		if(numero == null)
		{
			break;	
	  }
		//Me fijo que sea un numero.
		numero = parseInt(numero);
		if(isNaN(numero))
		{
			continue;
		}
		//Clasifico y comparo los numero. obtengo min y max.
		if(numero >-1) 
	  {
			positivo += numero;
	  }
		if(numero < 0)
	  {
			negativo *= numero;
	  }  		
	}
	document.getElementById('suma').value = "La suma de los positivos: " + positivo + ".";
	document.getElementById('producto').value = "El producto de los negativos: " + negativo + ".";
	
}