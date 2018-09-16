/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
var contador;
function comenzar()
{
    contador = 0;
    tiempoInicio = setInterval(tiempo, 1000);
    colorSecreto = Math.floor(Math.random()*(7 - 1) + 1);
    switch(colorSecreto)
    {
        case 1 :
        {
            colorSecreto = "azul";
            break;
        }
        case 2 :
        {
            colorSecreto = "amarillo";
            break;
        }
        case 3 :
        {
            colorSecreto = "marron";
            break;
        }
        case 4 :
        {
            colorSecreto = "verde";
            break;
        }
        case 5 :
        {
            colorSecreto = "celeste";
            break;
        }
        case 6 :
        {
            colorSecreto = "rojo";
            break;
        }

    }
    document.getElementById('ColorElejido').value = colorSecreto;

	

}//FIN DE LA FUNCIÓN
function tiempo()
{
    contador++;
}
function Responder(colorParametro)
{
    if(colorParametro == colorSecreto)
    {
        clearInterval(tiempoInicio);
        alert('Ha tardado ' + contador + ' segundos en responder.');
        
    }
}//FIN DE LA FUNCIÓN
