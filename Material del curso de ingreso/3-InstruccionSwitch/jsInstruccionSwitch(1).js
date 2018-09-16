function Mostrar()
{
    var mes;
    mes = document.getElementById("mes").value;
    switch(mes)
    {
        case "Enero" :
        {
            alert("¡¡¡Qué comiences bien el año!!!");
            break;
        }
        case "Marzo" :
        {
            alert("¡A clases!");
            break;
        }
        case "Julio" :
        {
            alert("¡Se vienen las vacaciones!");
            break;
        }

        case "Diciembre" :
        {
            alert("¡¡¡Felices fiestas!!!");
            break;
        }
    }
}