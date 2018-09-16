/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
// type of edad tipo de dato
var numerosecreto;
var contadorintentos;
var numerousuario;

function comenzar() {
  contadorintentos = 0;
  document.getElementById("intentos").value = 'Intentos: ' + contadorintentos;
  numerosecreto = Math.floor((Math.random() * (101 - 1) + 1));
  alert("Se ha generado un número secreto entre 1 y 100. ¡El juego ha comenzado!");
}

function verificar() 
{
  numerousuario = document.getElementById("numero").value;
  contadorintentos++;
  if (numerosecreto == undefined) 
  {
    alert("Haga click en comenzar para iniciar el juego.");
    contadorintentos = 0;
  }
  else 
  {
    if (contadorintentos > 10) 
    {
      alert("El máximo de intentos es 10, el juego ha finalizado.");
      document.getElementById('intentos').value = ' Máximo de intentos.';
      numerosecreto = null;
      return(null);
    
    }
    else if (contadorintentos == 1 && numerousuario == numerosecreto) 
    {
      while (numerosecreto == numerousuario) 
      {
        numerosecreto = Math.floor((Math.random() * (101 - 1) + 1));
      }
    }

    if (numerousuario == numerosecreto) 
    {
      document.getElementById("intentos").value = 'Intentos: ' + contadorintentos;
      alert("¡¡Usted es un ganador!! En tan solo " + contadorintentos + " intentos adivinó que " + numerosecreto + " es el número secreto.");
      numerosecreto = null;
    }
    else if (numerousuario < numerosecreto) 
    {
      document.getElementById("intentos").value = 'Intentos: ' + contadorintentos;
      alert("¡Falta para llegar al número secreto!");
    }
    else 
    {
      document.getElementById("intentos").value = 'Intentos: ' + contadorintentos;
      alert("¡Te has pasado del número secreto!");
    }
  }
}