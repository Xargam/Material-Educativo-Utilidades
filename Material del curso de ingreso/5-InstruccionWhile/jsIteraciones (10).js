function Mostrar() 
{
	var numero = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var banderaPares;

	while (numero != null) 
	{
		numero = prompt('Ingrese números y presione cancelar para dejar de hacerlo.');
		if (numero != null)
		{
			numero = parseInt(numero);
			while(isNaN(numero))
			{
				numero = parseInt(prompt('Ingrese números y presione cancelar para dejar de hacerlo.'));
			}

			banderaPares = numero % 2 == 0;
			if(banderaPares == true)
			{
				contadorPares++;
			}

			if(numero > 0)
			{
				contadorPositivos++;
				acumuladorPositivos += numero;
			}
			else if(numero == 0)
			{
				contadorCeros++;
			}
			else
			{
				contadorNegativos++;
				acumuladorNegativos += numero;
			}
		}		
	}
	
	document.write("<h2>Ingresó: " + contadorPositivos + " números positivos." + "<br/> ");
	document.write("Ingresó: " + contadorNegativos + " números negativos." + "<br/> ");
	document.write("Ingresó: " + contadorCeros + " ceros.<br/>");
	document.write("Ingresó: " + contadorPares + " números pares.<h2/><br/>");
	document.write("<h3>La suma de los números positivos que ingreso es de: " + acumuladorPositivos + ".<br/>");
	document.write("La suma de los números negativos que ingreso es de: " + acumuladorNegativos + ".<br/>");
	document.write("El promedio de los números positivos que ingreso es: " + acumuladorPositivos/ contadorPositivos + ".<br/>");
	document.write("El promedio de los números negativos que ingreso es: " + acumuladorNegativos/ contadorNegativos + ".<br/>");
	document.write("La diferencia entre los números positivos y negativos que ingresó es: " + (acumuladorPositivos - acumuladorNegativos) + ".<br/>");

	
}