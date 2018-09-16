function Mostrar()
{ 
    var hora = document.getElementById("hora").value;
    hora = parseInt(hora);
    switch(hora)
    {
        case 7 :
        case 8 :
        case 9 :
        case 10 :
        case 11 :
        {
            alert("Es de mañana.");
            break;    
        }
    }
}