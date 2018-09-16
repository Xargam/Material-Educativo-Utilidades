
var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random()*(4 - 1) + 1);
	console.log(eleccionMaquina);
	switch(eleccionMaquina)
	{
		case 1:
		{ 
			eleccionMaquina = "piedra";
			break;
		}
		case 2:
		{ 
			eleccionMaquina = "papel";
			break;
		}
		case 3:
		{ 
			eleccionMaquina = "tijera";
			break;
		}
	}
	console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN

function piedra()
{
	if(eleccionMaquina == "piedra")
	{
		alert("La máquina ha elegido piedra. ¡Has empatado!");	
		ContadorDeEmpates++;
		eleccionMaquina = undefined;	
	}
	else if(eleccionMaquina == "tijera")
	{
		alert("La máquina ha elegido tijera. ¡Has ganado!");
		ContadorDeGanadas++;
		eleccionMaquina = undefined;
	}
	else
	{
		alert("La máquina ha elegido papel. ¡Has perdido!");
		ContadorDePerdidas++;
		eleccionMaquina = undefined;
	}
	mostarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina == "papel")
	{
		alert("La máquina ha elegido papel. ¡Has empatado!");
		ContadorDeEmpates++;	
		eleccionMaquina = undefined;	

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("La máquina ha elegido piedra. ¡Has ganado!");
		ContadorDeGanadas++;
		eleccionMaquina = undefined;
	}
	else
	{
		alert("La máquina ha elegido tijera. ¡Has perdido!");
		ContadorDePerdidas++;
		eleccionMaquina = undefined;
	}
	mostarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{

	if(eleccionMaquina == "tijera")
	{
		alert("La máquina ha elegido tijera. ¡Has empatado!");
		ContadorDeEmpates++;
		eleccionMaquina = undefined;		
	}
	else if(eleccionMaquina == "papel")
	{
		alert("La máquina ha elegido papel. ¡Has ganado!");
		ContadorDeGanadas++;
		eleccionMaquina = undefined;
	}
	else
	{
		alert("La máquina ha elegido piedra. ¡Has perdido!");
		ContadorDePerdidas++;
		eleccionMaquina = undefined;
	}
	mostarResultado();
	comenzar();

}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value = "Partidas empatadas: " + ContadorDeEmpates;
document.getElementById('perdidas').value = "Partidas perdidas: " + ContadorDePerdidas;
document.getElementById('ganadas').value = "Partidas ganadas: " + ContadorDeGanadas;

}