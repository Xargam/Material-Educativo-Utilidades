function Mostrar()
{
    var edad;
    edad = document.getElementById("edad").value;
    if(edad > 17) 
    {
        alert("Usted tiene " + edad + " años y es mayor de edad.");
    }
    else if(edad > 12) 
    {
        alert("Usted tiene " + edad + " años y es un adolescente.");
    }
    else 
    {
        alert("Usted tiene " + edad + " años y es un niño.");
    }

//tomo la edad  




}//FIN DE LA FUNCIÓN