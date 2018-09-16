
function Mostrar() 
{
    var numeroalumno = 0;
    var nota;
    var sexo;
    var promedio;
    var suma = 0;
    var comparadormenor;
    var contadorvarones = 0;
    //almacena nota, sexo y suma las notas.
    while (numeroalumno <= 99) 
    {
        numeroalumno++;
        nota = parseInt(prompt("Ingrese la nota del alumno " + numeroalumno + ". El número ingresado debe estar entre 0 y 10 inclusive."));
        sexo = prompt("Ingrese el sexo del alumno " + numeroalumno + '. Masculino se representa con una "m" sin comillas y femenino con una "f" sin comillas.');
        if(nota > 10 || nota < 0 || isNaN(nota) || sexo != "f" && sexo != "m") 
        {
            alert("Se ha producido un error al validar los datos ingresados del alumno " + numeroalumno + ". Asegúrese de que la nota y el sexo ingresados correspondan con caracteres válidos. Por favor reingrese los datos de este alumno.");
            numeroalumno--;
        }
        else 
        {
            suma += nota;
            if(nota > 5 && sexo == "m") 
            {
                contadorvarones++;
            }
            if(comparadormenor == undefined) 
            {
                comparadormenor = nota;
            }
            else if(comparadormenor > nota) 
            {
                comparadormenor = nota;
            }
        }
    }
    promedio = suma / 100;
    alert("El promedio de todas notas ingresadas es " + promedio + ". Hubo " + contadorvarones  + " varones cuya nota fue igual o mayor a 6. La nota más baja fue un " + comparadormenor + ".");







}
    
