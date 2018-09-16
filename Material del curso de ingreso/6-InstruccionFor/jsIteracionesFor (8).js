function Mostrar()
{
    var numero;
    var respuesta = " es primo.";

    do
    {
        numero = parseInt(prompt("Ingrese un número positivo mayor a 1 para saber si es primo."));
    }    
    while(isNaN(numero) || numero < 2)

    for(var i = 2; i < numero ; i++ )
    {
        if(numero % i == 0)
        {
            respuesta = " no es primo.";
            break;
        }
    }
    alert(numero + respuesta);
    


   



}//FIN DE LA FUNCIÓN