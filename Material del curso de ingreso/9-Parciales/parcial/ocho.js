function Mostrar() {
    var numero;
    var contadorpares = 0;
    var promedio;
    var comparadormenor;
    var comparadormayor;
    var suma = 0;
    var detectorpar;
    var contador = 0;
    var detector = false;
    while (detector == false) 
    {
        numero = parseInt(prompt('Ingrese números positivos y el sistema calculará el menor, el mayor, la suma, el promedio y la cantidad de números pares. Para dejar de ingresar números haga click en cancelar o ingrese el cuadro en blanco.'));
        detector = isNaN(numero);
        if (detector == true && contador == 0) 
        {
            alert('Ingrese por lo menos un número.');
            detector = false;

        }
        else if(detector == false)
        {
            if (numero < 0) 
            {
                alert('El número ingresado no es válido.');
            }
            else 
            {
                suma += numero;
                detectorpar = numero % 2;

                if (detectorpar == 0) {
                    contadorpares++;
                }

                if (comparadormenor == undefined) {
                    comparadormenor = numero;
                }
                else if (comparadormenor > numero) {
                    comparadormenor = numero;

                }

                if (comparadormayor == undefined) {
                    comparadormayor = numero;
                }
                else if (comparadormayor < numero) {
                    comparadormayor = numero;
                }
                contador++;

            }

        }
        else
        {
            alert('Ha dejado de ingresar números, realizando cálculos...');
        }
    }
    promedio = suma / contador;
    document.write('<h3>Se hallaron ' + contadorpares + ' números pares.<br/>' + 'El promedio de los números ingresados es de ' + promedio + '.<br/>' + 'La suma de todos los números da ' + suma + '.<br/>' + 'El número máximo ingresado fue ' + comparadormayor + ' y el mínimo fue ' + comparadormenor + '.');
}
