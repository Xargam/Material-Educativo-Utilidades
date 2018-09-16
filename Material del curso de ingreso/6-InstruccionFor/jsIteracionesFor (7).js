function Mostrar() 
{
    var numero;
    var contadorDivisores = 0;
    
    do
    {
        numero = parseInt(prompt("Ingrese un número que sea positivo."));
    }
    while(isNaN(numero) || numero < 1)
    
    for(var i = 1 ; i <= numero ; i++) 
    {
        if(numero % i == 0)
        {
            contadorDivisores++;
        }
    }
    alert('Se hallaron ' + contadorDivisores + ' divisores posibles.');

}//FIN DE LA FUNCIÓN