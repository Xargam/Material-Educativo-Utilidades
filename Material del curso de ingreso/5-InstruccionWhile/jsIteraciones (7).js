function Mostrar()
{
	var numero = 0;
	var contador = 0;
	var acumulador = 0;
	while(numero != null) 
	{
		numero = (prompt('Escoja números indefinidamente, si quiere dejar de elegir, haga click en "cancelar".'));
		if(numero != null)
		{
			numero = parseInt(numero);
		    while(isNaN(numero))
		    {
				numero = parseInt(prompt('Escoja números indefinidamente, si quiere dejar de elegir, haga click en "cancelar".'));
		    }
	    	acumulador += numero;
	    	contador++;
		}	
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById("promedio").value = acumulador / contador;
}