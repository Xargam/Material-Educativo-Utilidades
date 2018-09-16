/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

 var respuesta;
 var numero1;
 var numero2;
 var operaciones;
 var resultado;
 var temporizador;

function comenzar()
{
    alert('¡Tenés 4 segundos para resolver el cálculo!');
    numero1 = Math.floor(Math.random()*(11 - 1) + 1);
    numero2 = Math.floor(Math.random()*(11 - 1) + 1);
    operaciones = Math.floor(Math.random()*(5 - 1) + 1);
    switch(operaciones)
    {
        case 1:
        {
            operaciones = "+";
            resultado = numero1 + numero2;  
            break;
        }
        case 2:
        {
            operaciones = "-";
            resultado = numero1 - numero2;
            break;
        }
        case 3:
        {
            operaciones = "x";
            resultado = numero1 * numero2;
            break;
        }
        case 4:
        {
            operaciones = "÷";
            resultado = numero1 / numero2;
            break;
        }
    }
    document.getElementById('PrimerNumero').value = numero1;
    document.getElementById('SegundoNumero').value = numero2;
    document.getElementById('Operador').value = operaciones;
    temporizador = setTimeout(Responder, 4000);

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = document.getElementById('Respuesta').value;
    if(respuesta != resultado)
    {
        alert('La respuesta es incorrecta.');
    }
    else 
    {
        alert('La respuesta es correcta.');    
    }
    clearTimeout(temporizador);
}//FIN DE LA FUNCIÓN
