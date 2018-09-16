function Mostrar()
{
	var numero;
	numero = parseInt(prompt("ingrese un número (Permitidos: 0 a 9)."));
	if(numero == null)
	{
		break;
	}
	while(numero < 0 || numero > 9 || isNaN(numero))
	{
		numero = parseInt(prompt("ingrese un número (Permitidos: 0 a 9)."));
	}
	if(numero != null)
	{
		document.getElementById("Numero").value = numero + " es válido.";
	}
	
	
	
}