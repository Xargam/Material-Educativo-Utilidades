/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function ComenzarIngreso() 
{

}

function NumerosPares() 
{

    var numero;
    var contadorPares = 0;
    numero = parseInt(document.getElementById('numero').value);
    if (numero < 1 || isNaN(numero)) 
    {
        alert('Debe ingresar un número positivo.');
    }
    else 
    {
        for (var comparar = numero; comparar > -1; comparar--) 
        {
            if (comparar % 2 == 0) 
            {
                contadorPares++;
            }
        }
        alert('Se hallaron ' + contadorPares + ' números pares desde ' + numero + ' hasta 0.');
    }

}

function NumerosImpares() 
{
    var numero;
    var contadorImpares = 0;
    numero = parseInt(document.getElementById('numero').value);
    if (numero < 1 || isNaN(numero)) 
    {
        alert('Debe ingresar un número positivo.');
    }
    else 
    {
        for (var comparar = numero; comparar > -1; comparar--) 
        {
            if (comparar % 2 != 0) 
            {
                contadorImpares++;
            }
        }
        alert('Se hallaron ' + contadorImpares + ' números impares desde ' + numero + ' hasta 0.');

    }

}

function NumerosDivisibles() 
{
    var numero;
    var contadorDivisores = 0;
    numero = parseInt(document.getElementById('numero').value);
    if (numero < 1 || isNaN(numero)) 
    {
        alert('Debe ingresar un número positivo.');
    }
    else 
    {
        for (var comparar = 100; comparar > 0; comparar--) 
        {
            if (numero % comparar == 0) 
            {
                contadorDivisores++;
            }
        }
        alert('Se hallaron ' + contadorDivisores + ' divisores de este número entre 1 y 100.');
    }


}

function VerificarPrimo() 
{
    var numero;
    var respuesta = " es primo.";
    numero = parseInt(document.getElementById('numero').value);
    if (numero < 1 || isNaN(numero))
    {
        alert('Debe ingresar un número positivo.');
    }
    else 
    {
        var comparar = numero;
        if (numero > 1) 
        {

            for (comparar--; comparar > 1; comparar--) 
            {
                if (numero % comparar == 0) 
                {
                    respuesta = " no es primo.";
                    break;
                }
            }
            alert(numero + respuesta);
        }
        else
        {
            alert(numero + ' no es primo.');

        }
    }
}

function NumerosPrimos() 
{
    var numero;
    var contadorPrimos = 0;
    var contadorDiv = 0;
    numero = parseInt(document.getElementById('numero').value);
    // Tomo un número por ID.
    if (numero < 1 || isNaN(numero)) 
    {
        alert('Debe ingresar un número positivo.');
    }
    else 
    {
        for (var reductor = numero; reductor > 0; reductor--)
    /*Copio el número a la variable reductor y lo voy diviendo por todos los números desde si mismo
    hasta el 1 para calcular si es primo o no.
    */  {
            //revisados todos los números primos  desde el número que ingreso el usuario hasta el 1 finalizo bucle.
            if (numero == 1) 
            {
                break;
            }
            //Divido el numero y si es divisible (resto 0) lo indico en el contador.
            if (numero % reductor == 0) 
            {
                contadorDiv++;
            }
            // cuando dividi por todas las posibilidades reviso si es primo.
            if (reductor == 1) 
            {
                if (contadorDiv > 2) // si se divide por si mismo, por uno y por mas numeros no es primo.
                {
                    numero--;            //bajo el numero para ver si el anterior es primo.
                    reductor = numero;   //copio el numero a reductor para empezar a dividirlo.
                    reductor++;          //como reductor va bajar un punto debido al bucle for, lo aumento uno para que haga todo bien.
                    contadorDiv = 0;     //reestablezco el contador de divisores a 0 para dividir.             
                }
                else if (contadorDiv == 2)   // si hay 2 divisores el numero es primo.
                {
                    contadorPrimos++;      //Registro que es primo.
                    numero--;
                    reductor = numero;
                    reductor++;
                    contadorDiv = 0;
                }
            }
        }
        alert('Se hallaron ' + contadorPrimos + ' números primos desde el número hasta 0.');
    }
}

