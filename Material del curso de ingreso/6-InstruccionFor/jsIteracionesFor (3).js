function Mostrar()
{
    var repeticiones;

    do
    {
        repeticiones = prompt("Ingrese el número de repeticiones.");

    }    
    while(isNaN(repeticiones))

    for(var i = 1; i <= repeticiones ; i++)
    {
        alert(" Hola UTN FRA.");
    }



}//FIN DE LA FUNCIÓN