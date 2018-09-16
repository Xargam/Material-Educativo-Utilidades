/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


var numerousuario;
var numeroSecreto;
var intentos;

function comenzar() 
{
	intentos = 0;
	document.getElementById('intentos').value = 'Intentos: ' + intentos;
	numeroSecreto = Math.floor(Math.random() * (101 - 1) + 1);
	alert('Se ha generado un número secreto del 1 al 100. ¡El juego ha comenzado!');
	console.log(numeroSecreto);
}

function verificar() 
{
	intentos++;
	if (numeroSecreto == undefined) 
	{
		alert('Debes hacer click en comenzar para generar un número secreto.');
		intentos = 0;	
	}
	else 
	{
		document.getElementById('intentos').value ='Intentos: ' + intentos;
		numerousuario = document.getElementById('numero').value;
		numerousuario = parseInt(numerousuario);
		if (numerousuario > numeroSecreto) 
		{
			alert('Te has pasado del número secreto.');
		}
		else if(numerousuario < numeroSecreto)
		{
			alert('Falta para llegar al número secreto.');
		}
		else
		{
			switch (intentos) 
			{
				case 1:
				{
					alert('¡Ha ganado!¡Ha descubierto que ' + numeroSecreto + ' es el número secreto en tan solo un intento!¡Usted es un psíquico!');
					numeroSecreto = undefined;
					break;
				}
				case 2:
				{
					alert('¡Ha ganado!¡Ha descubierto que ' + numeroSecreto + ' es el número secreto en solo dos intentos!¡Excelente percepción!');
					numeroSecreto = undefined;
					break;

				}
				case 3:
				{
					alert('¡Ha ganado!¡Ha descubierto que ' + numeroSecreto + ' es el número secreto en solo tres intentos!¡Eso es suerte!');
					numeroSecreto = undefined;
					break;

				}
				case 4:
				{
					alert('¡Ha ganado!¡Ha descubierto que ' + numeroSecreto + ' es el número secreto en solo cuatro intentos!¡Excelente técnica!');
					numeroSecreto = undefined;
					break;

				}
				case 5:
				{
					alert('¡Ha ganado!¡Ha descubierto que ' + numeroSecreto + ' es el número secreto en cinco intentos! Usted está en la media.');
					numeroSecreto = undefined;
					break;
				}
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				{
					alert('Ganó, ha descubierto que ' + numeroSecreto + ' es el número secreto en ' + intentos + ' intentos. ¡Falta técnica!');
					numeroSecreto = undefined;
					break;
				}
				default:
				{
					alert('Ganó, ha descubierto que ' + numeroSecreto + ' es el número secreto en una gran cantidad de intentos equivalente a ' + intentos + ' intentos. ¡Afortunado en el amor!');
					numeroSecreto = undefined;	
				}		
			}
		}
	}
}