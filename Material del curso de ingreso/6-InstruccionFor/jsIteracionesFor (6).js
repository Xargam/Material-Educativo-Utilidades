function Mostrar()
{
    var numero;
    var contadorPares = 0;

    alert('Los resultados se mostrarán por consola.');
    do
    {
        numero = prompt("Ingrese un número positivo.");
    }
    while(isNaN(numero) || numero < 1)

    console.log('Número ingresado: ' + numero);
    for(var i = 1; i <= numero ; i++)
    {
        if(i % 2 == 0)
        {
            contadorPares++;
            console.log('Este número es par: ' + i);        
        }
    }
    console.log('Cantidad de números pares encontrados: ' + contadorPares);
   
   
    
   

}//FIN DE LA FUNCIÓN