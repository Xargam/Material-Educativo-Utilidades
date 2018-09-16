var detector;
var maximo;
var minimo;
var diaMa;
var diaMe;

var lunes;
var martes;
var miercoles;
var jueves;
var viernes;
var sabado;
var domingo;

function Mostrar()
{
    alert('Ingrese importes de cada día de la semana y recuerde que deben ser mayores a 0.');  
    do 
    {
        lunes = parseInt(prompt('Ingrese el importe del día lunes.'));
        martes = parseInt(prompt('Ingrese el importe del día martes.'));
        miercoles = parseInt(prompt('Ingrese el importe del día miércoles.'));
        jueves = parseInt(prompt('Ingrese el importe del día jueves.'));
        viernes = parseInt(prompt('Ingrese el importe del día viernes.'));
        sabado = parseInt(prompt('Ingrese el importe del día sábado.'));
        domingo = parseInt(prompt('Ingrese el importe del día domingo.'));
        detector = lunes < 1 || martes < 1 || miercoles < 1|| jueves < 1|| viernes < 1|| sabado < 1|| domingo < 1 || isNaN(lunes, martes, miercoles, jueves, viernes, sabado, domingo)
        if(detector == true)
        {
            alert('Hubo un error al validar los datos, por favor reingréselos.');
            detector = false;
        }
    }
    while (lunes < 1 || martes < 1 || miercoles < 1|| jueves < 1|| viernes < 1|| sabado < 1|| domingo < 1 || isNaN(lunes, martes, miercoles, jueves, viernes, sabado, domingo))
    maximo = lunes;
    diaMa = 'lunes';
    compararMayor();
    minimo = lunes;
    diaMe = 'lunes';
    compararMenor();
    alert('El menor importe fue de $' + maximo + ' durante el día ' + diaMa + '.');
    alert('El mayor importe fue de $' + minimo + ' durante el día ' + diaMe + '.');
}


function compararMayor()
{
    detector = maximo < martes;
    if(detector == false)
    {
        maximo = martes;
        diaMa = 'martes';
    }

    detector = maximo < miercoles;
    if(detector == false)
    {
        maximo = miercoles;
        diaMa = 'miércoles';
    }

    detector = maximo < jueves;
    if(detector == false)
    {
        maximo = jueves;
        diaMa = 'jueves';
    }

    detector = maximo < viernes;
    if(detector == false)
    {
        maximo = viernes;
        diaMa = 'viernes';
    }
    
    detector = maximo < sabado;
    if(detector == false)
    {
        maximo = sabado;
        diaMa = 'sabado';
    }

    detector = maximo < domingo;
    if(detector == false)
    {
        maximo = domingo;
        diaMa = 'domingo';
    }

}

function compararMenor()
{
    {
    detector = minimo > martes;
    if(detector == false)
    {
        minimo = martes;
        diaMe = 'martes';
    }

    detector = minimo > miercoles;
    if(detector == false)
    {
        minimo = miercoles;
        diaMe = 'miércoles';
    }

    detector = minimo > jueves;
    if(detector == false)
    {
        minimo = jueves;
        diaMe = 'jueves';
    }

    detector = minimo > viernes;
    if(detector == false)
    {
        minimo = viernes;
        diaMe = 'viernes';
    }
    
    detector = minimo > sabado;
    if(detector == false)
    {
        minimo = sabado;
        diaMe = 'sábado';
    }

    detector = minimo > domingo;
    if(detector == false)
    {
        minimo = domingo;
        diaMe = 'domingo';
    }

}

}
