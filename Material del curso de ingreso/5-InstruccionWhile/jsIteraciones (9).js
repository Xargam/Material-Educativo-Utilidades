function Mostrar()
{	
	var numero;
	var maximo;
	var minimo;
	var bandera = true;

	while(true)
	{
		numero = prompt('Ingrese números indefinidamente y el programa le dirá cuál fue el mayor y el menor. Si desea dejar de ingresar números aprete "cancelar".');
		if(numero == null)
		{
			break;
		}

		numero = parseInt(numero);
		if(isNaN(numero))
		{
			continue;
		}

		if(bandera == true)
		{
			maximo = numero;
		    minimo = numero;
			bandera = false;
	    }
		
		if(maximo < numero)
		{
			maximo = numero
		}
		if(minimo > numero)
		{
			minimo = numero;
		}
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}