function Mostrar()
{
    var dia;
    dia = prompt("Ingrese un día de la semana correctamente escrito, tal como el ejemplo.","Miércoles");
    switch(dia)
    {
        case "Lunes" :
        case "Martes" :
        case "Miércoles" :
        case "Jueves" :
        case "Viernes" :
        {
            alert("¡A trabajar!");
            break;

        }
        case "Sábado" :
        case "Domingo" :
        {
            alert("¡¡Es fin de semana!!"); 
            break;
        }           
    }

}
