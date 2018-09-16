function Mostrar() {
    var hora 
    hora = document.getElementById("hora").value;
    hora = parseInt(hora);
    switch (hora) 
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        {
            alert("Es de noche.");
            break;
        }
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        {
            alert("Es de mañana.");
            break;
        }
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        {
            alert("Es de tarde.");
            break;
        }
        default:
        {
            alert("La hora no existe.")
        }
    }
}