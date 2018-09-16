function Mostrar()
{
	var notaexamen;
	notaexamen = Math.floor(Math.random()*10);
	if(notaexamen > 8 ) {
		alert("La nota de su examen es " + notaexamen + ". ¡Excelente!");
	}
	else if(notaexamen > 6) {
		alert("La nota de su examen es " + notaexamen + ". ¡Muy bien!");
	}
	else if(notaexamen > 3)
	{
		alert("La nota de su examen es " + notaexamen + ". ¡Bien!");
	}
	else if(notaexamen > 1)
	{
		alert("La nota de su examen es " + notaexamen + ". ¡Mal!");
		
	}
	else
	{
		alert("La nota de su examen es " + notaexamen + ". ¡Pésimo!");

	}

	
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN