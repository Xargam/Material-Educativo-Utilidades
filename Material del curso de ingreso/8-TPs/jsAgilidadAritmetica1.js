/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numero1;
var numero2;
var operaciones;
var resultado;

function comenzar()
{
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
    document.getElementById('Operador').value = operaciones;
    document.getElementById('PrimerNumero').value = numero1;
    document.getElementById('SegundoNumero').value = numero2;
}

//FIN DE LA FUNCIÓN

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

    
}//FIN DE LA FUNCIÓN