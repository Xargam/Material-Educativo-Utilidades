function Mostrar()
{
    var resultado;
    var numero1 = prompt("Elija el primer número."); 
    var numero2 = prompt("Elija el segundo número.");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    if(numero1 == numero2) {
        resultado = numero1 * numero2;
        document.write("Los números que ingesó son iguales por lo tanto se han multiplicado. El resultado es " + resultado + ".");
    }
    else if(numero1 > numero2) {
        resultado = numero1 - numero2;
        document.write("El primer número que ingesó es mayor al segundo por lo tanto se han restado. El resultado es " + resultado + ".");
    }
    else {
        resultado = numero1 + numero2;
        document.write("El primer número que ingesó es menor al segundo por lo tanto se han sumado. El resultado es " + resultado + ".");
    }
    

}
