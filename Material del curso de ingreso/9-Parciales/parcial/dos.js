function Mostrar()
{
  
  var importe;
  var importeiva;
  importe = prompt("Ingrese el importe de su producto y se calculara el costo con I.V.A.","");
  importe = parseInt(importe);
  importeiva = parseInt(importeiva);
  importeiva =  importe * 0.21;
  importeiva = importeiva + importe;
  document.getElementById("importeFinal").value = importeiva;


}
