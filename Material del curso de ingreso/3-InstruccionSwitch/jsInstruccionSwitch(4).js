function Mostrar()
{
    var mes = document.getElementById("mes").value;
    switch(mes)
    {
        case "Febrero" :
        {
            alert("Este mes tiene 28 días y en año bisiesto tiene 29.");
            break;
        }
        case "Abril" :
        {
            alert("Este mes tiene 30 días.");
            break;
        }
        case "Junio" :
        {
            alert("Este mes tiene 30 días.");
            break;
        }
        case "Septiembre" :
        {
            alert("Este mes tiene 30 días.");
            break;
        }
        case "Noviembre" :
        {
            alert("Este mes tiene 30 días.");
            break;
        }
        default :
        {
            alert("Este mes tiene 31 días.");
        }
        

    }
    

}