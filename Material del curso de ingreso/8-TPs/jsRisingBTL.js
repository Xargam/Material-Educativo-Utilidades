/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	sueldo[] bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

//var dato = "cadena".tolowercase();

var sexo;
var estadoCivil;
var sueldo = [];
var legajo;
var nacionalidad;
var sueldoMaxNac;
var sueldoMaxFemArg;
var acumuladorSueldoF = 0;
var acumuladorSueldoM = 0;
var acumuladorSueldosNetos = 0;
var acumuladorSueldosBrutos = 0;
var contadorSueldosBrutos = 0;
var contadorSueldosNetos = 0;
var acumuladorSueldoDualSex = 0;
var contadorSueldoF = 0;
var contadorSueldoM = 0;
var contadorSueldoFYM = 0;
var sueldoNeto = [];
var banderaSueldoMaxNac = true;
var banderaSueldoMaxArgentinas = true;
var contadorHombres12001 = 0;
var EdadMujerSueldoMax;
var mujerSueldoMax;
var banderaEdadMujerSueldoMax = true;
var banderaLegajoHombreArgSueldoMin = true;
var legajoArgSueldoMin;
var sueldoMinArgentino;
var promedioNetos;
var promedioBrutos;
var contadorNetoMayorAPromedio = 0;
var contadorBrutoMayorAPromedio = 0;
var posicion = 0;


function ComenzarIngreso() 
{
    
    console.log('trivago')
    for (var contador = 1; contador < 8; contador++) 
    {
        procesar();
    }
    document.write('<h3>El sueldo máximo de los nacionalizados es: $' + sueldoMaxNac + '<br/>');
    document.write('El sueldo máximo de las mujeres de Argentina es: $' + sueldoMaxFemArg + '<br/>');
    document.write('El sueldo neto promedio de las mujeres es: $' + acumuladorSueldoF / contadorSueldoF + '<br/>');
    document.write('El sueldo neto promedio de los hombres es: $' + acumuladorSueldoM / contadorSueldoM + '<br/>');
    document.write('El sueldo neto promedio de ambos sexos es: $' + acumuladorSueldoDualSex / contadorSueldoFYM + '<br/>');
    document.write('Hay ' + contadorHombres12001 + ' hombres con un sueldo mayor a $12.000<br/>');
    document.write('La mujer con el mayor sueldo tiene: ' + EdadMujerSueldoMax + ' años.<br/>');
    document.write('El número de legajo del argentino con menor sueldo es: ' + legajoArgSueldoMin + '.<br/>');
    promedioNetos = acumuladorSueldosNetos / contadorSueldosNetos;
    promedioBrutos = acumuladorSueldosBrutos / contadorSueldosBrutos;
    for(posicion = 0; posicion < 7; posicion++) 
    {
        if (sueldo[posicion] > promedioBrutos) 
        {
            contadorBrutoMayorAPromedio++;

        }
        if (sueldoNeto[posicion] > promedioNetos) 
        {
            contadorNetoMayorAPromedio++;
        }
    }
    document.write('Hay ' + contadorBrutoMayorAPromedio + ' personas con un sueldo bruto mayor al promedio y ' + contadorNetoMayorAPromedio + ' personas con sueldo neto mayor al promedio.');
}

function procesar() 
{
    do 
    {
        edad = parseInt(prompt('Ingrese edad (Entre 18 y 90 años inclusive).'));
    }
    while (edad > 90 || edad < 18 || isNaN(edad))

    do 
    {
        sexo = prompt('Ingrese sexo (M para masculino y F para femenino).');
        sexo = sexo.toUpperCase();
    }
    while (sexo.toUpperCase() != "M" && sexo != "F")

    do 
    {
        estadoCivil = parseInt(prompt('Ingrese estado civil (1 es soltero, 2 es casado, 3 es divorciado y 4 es viudo).'));

    }
    while (estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil))

    do 
    {
        sueldo[posicion] = parseInt(prompt('Ingrese el sueldo bruto, no menor a $8000.'));
    }
    while (sueldo[posicion] < 8000 || isNaN(sueldo[posicion]))

    // Tomo el sueldo[] Neto (-25%)
    sueldoNeto[posicion] = sueldo[posicion] - (sueldo[posicion] * 0.25)

    do 
    {
        legajo = parseInt(prompt('Ingrese el número de legajo, es de 4 cifras y sin ceros a la izquierda.'));
    }
    while (legajo < 1000 || legajo > 9999 || isNaN(legajo))

    do 
    {
        nacionalidad = prompt('Ingrese nacionalidad, A para argentinos, E para extranjeros y N para nacionalizados.');
        nacionalidad = nacionalidad.toUpperCase();
    }
    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")


    /* A partir de aquí todos los datos primordiales ya fueron obtenidos ...............
    ....................................................................................
    ....................................................................................
                    Punto 1:  sueldo[] maximo de los nacionalizados */

    // Tomo como maximo el primer sueldo[] recibido de un nacionalizado.

    if (banderaSueldoMaxNac == true && nacionalidad == "N") 
    {
        sueldoMaxNac = sueldo[posicion];
        banderaSueldoMaxNac = false;
    }

    // Si el sueldo[] maximo guardado es menor a un sueldo[] Nac, lo actualizo.
    if (nacionalidad == "N" && sueldoMaxNac < sueldo[posicion]) 
    {
        sueldoMaxNac = sueldo[posicion];
    }


    //Punto 2: sueldo[] máximo de las argentinas

    // Tomo como maximo el primer sueldo[] recibido de una argentina (nac = A y sexo = F).

    if (banderaSueldoMaxArgentinas == true && nacionalidad == "A" && sexo == "F") 
    {
        sueldoMaxFemArg = sueldo[posicion];
        banderaSueldoMaxArgentinas = false;
    }
    //Si hay un sueldo[] más alto que el maximo lo guardo.
    if (sueldoMaxFemArg < sueldo[posicion] && nacionalidad == "A" && sexo == "F") 
    {
        sueldoMaxFemArg = sueldo[posicion];
    }

    // Punto 3 : Sumo los sueldo[]s netos de F, M y ambos para obtener promedios.
    //Voy acumulando la suma de los sueldo[]s netos

    acumuladorSueldoDualSex += sueldoNeto[posicion]; // sumo los sueldo[]s de cualquier sexo
    contadorSueldoFYM++;

    // de f y m

    if (sexo == "F") 
    {
        acumuladorSueldoF += sueldoNeto[posicion];
        contadorSueldoF++;
    }
    if (sexo == "M") 
    {
        acumuladorSueldoM += sueldoNeto[posicion];
        contadorSueldoM++;

    }

    //punto 4 : personas M con sueldo[] bajo 12000

    if (sexo == "M" && sueldo[posicion] > 12000) 
    {
        contadorHombres12001++;
    }

    //punto 5: edad de persona f con sueldo[] max

    // La primera vez guardo el sueldo[] maximo de F y la edad correspondiente.
    if (sexo == "F" && banderaEdadMujerSueldoMax == true) 
    {
        EdadMujerSueldoMax = edad;
        mujerSueldoMax = sueldo[posicion];
        banderaEdadMujerSueldoMax = false;
    }

    // verifico que no haya un sueldo[] mayor al maximo, si lo hay actualizo sueldo[] y edad.
    if (mujerSueldoMax < sueldo[posicion] && sexo == "F") 
    {
        mujerSueldoMax = sueldo[posicion];
        EdadMujerSueldoMax = edad;
    }

    //punto 6 : Legajo argentino con menor sueldo[]


    // Tomo el primer sueldo[] de un argentino como minimo.
    if (banderaLegajoHombreArgSueldoMin == true && sexo == "M" && nacionalidad == "A") 
    {
        legajoArgSueldoMin = legajo;
        sueldoMinArgentino = sueldo[posicion];
        banderaLegajoHombreArgSueldoMin = false;
    }

    // Si encuentra un sueldo[] M Argentino menor al minimo lo guarda junto al legajo.
    if (sueldo[posicion] < sueldoMinArgentino && nacionalidad == "A" && sexo == "M") 
    {
        sueldoMinArgentino = sueldo[posicion];
        banderaLegajoHombreArgSueldoMin = legajo;
    }

    //punto 7 y 8: cantidad de personas sueldo[] neto y bruto > sueldo[]s promedios

    //Voy acumulando sueldo[]s con un contador
    //netos

    acumuladorSueldosNetos += sueldoNeto[posicion];
    contadorSueldosNetos++;

    //brutos

    acumuladorSueldosBrutos += sueldo[posicion];
    contadorSueldosBrutos++;


    //convierto los valores 

    switch (nacionalidad) 
    {
        case "A":
        {
            nacionalidad = "Nacionalidad: Argentino.";
            break;
        }
        case "E":
        {
            nacionalidad = "Nacionalidad: Extranjero.";
            break;
        }
        case "N":
        {
            nacionalidad = "Nacionalizado argentino.";
            break;
        }
    }



    switch(sexo) 
    {
        case "F":
        {
            sexo = "Sexo femenino.";
            break;

        }
        case "M":
        {
            sexo = "Sexo masculino.";
            break;

        }
    }


    switch (estadoCivil) 
    {
        case 1:
        {
            estadoCivil = "Soltero.";
            break;
        }
        case 2:
        {
            estadoCivil = "Casado.";
            break;
        }
        case 3:
        {
            estadoCivil = "Divorciado.";
            break;
        }
        case 4:
        {
            estadoCivil = "Viudo.";
            break;
        }
    }

    // Muestro los valores
    document.getElementById('Nacionalidad').value = nacionalidad;
    document.getElementById('Edad').value = edad + ' años.';
    document.getElementById('Sexo').value = sexo;
    document.getElementById('EstadoCivil').value = estadoCivil;
    document.getElementById('Sueldo').value = 'sueldo: ' + sueldo[posicion];
    document.getElementById('Legajo').value = 'Número de legajo: ' + legajo;
    posicion++;
}
/*10000 + 12000 + 11000 + 12000 + 14000 + 20000 + 18000 = todos los sueldos brutos.
promediobruto = 
7500 + 9000 + 8250 +9000 + 10500 + 15000 + 13500 ambos 10.392,857; correcto
7500 + 9000 + 10500 + 13500 = 40500 suma | promedio = 10125 (M) correcto
15000 + + 9000 + 8250 =32250      (suma ) promedio = 10750    (F) correcto */