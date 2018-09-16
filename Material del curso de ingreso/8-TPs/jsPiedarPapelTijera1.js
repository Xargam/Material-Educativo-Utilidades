/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar() 
{
    eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);

}//FIN DE LA FUNCIÓN
function piedra() 
{
    if (eleccionMaquina == undefined) 
    {
        alert("Recarga la página para volver a jugar.");
    }
    else 
    {
        switch (eleccionMaquina) 
        {
            case 1:
                {
                    alert("La máquina también ha elegido piedra. ¡Empataste!");
                    eleccionMaquina = undefined;
                    break;
                }
            case 2:
                {
                    alert("La máquina ha elegido papel. ¡Perdiste!");
                    eleccionMaquina = undefined;
                    break;
                }
            case 3:
                {
                    alert("La máquina ha elegido tijera. ¡Ganaste!");
                    eleccionMaquina = undefined;
                    break;
                }
                
        }
    }


}//FIN DE LA FUNCIÓN
function papel() {
    if (eleccionMaquina == undefined) 
    {
        alert("Recarga la página para volver a jugar.");
    }
    else {
        switch (eleccionMaquina) 
        {
            case 1:
                {
                    alert("La máquina ha elegido piedra. ¡Ganaste!");
                    eleccionMaquina = undefined;
                    break;
                }
            case 2:
                {
                    alert("La máquina también ha elegido papel. ¡Empataste!");
                    eleccionMaquina = undefined;
                    break;
                }
            case 3:
                {
                    alert("La máquina ha elegido tijera. ¡Perdiste!");
                    eleccionMaquina = undefined;
                    break;
                }
        }
        
    }
}//FIN DE LA FUNCIÓN
function tijera() {
    if (eleccionMaquina == undefined) 
    {
        alert("Recarga la página para volver a jugar.");
    }
    else 
    {
        switch (eleccionMaquina) 
        {
            case 1:
            {
                alert("La máquina ha elegido piedra. ¡Perdiste!");
                eleccionMaquina = undefined;
                break;
            }
            case 2:
            {
                alert("La máquina ha elegido papel. ¡Ganaste!");
                eleccionMaquina = undefined;
                break;
            }
            case 3:
            {
                alert("La máquina también ha elegido tijera. ¡Empataste!");
                eleccionMaquina = undefined;
                break;
            }
        }
    
    }

}//FIN DE LA FUNCIÓN