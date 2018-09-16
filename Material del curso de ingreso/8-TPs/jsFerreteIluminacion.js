/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // precio $35.  
    var marca;
    var descuento;
    var lamparitas; //alamacena cantidad de lámparas.
    var IIBB;
    var descuentoE;
    lamparitas = document.getElementById("Cantidad").value;
    lamparitas = parseInt(lamparitas);
    lamparitas = lamparitas * 35;
    marca = document.getElementById("Marca").value;  
    // 6 lámparas o más.                                 
    if(lamparitas >= 210) { 
        descuento = lamparitas * 0.5;
        // descuento mayor a $120.
        if(descuento > 120) {  
            IIBB = descuento * 0.1;
            descuentoE = IIBB + descuento;
            document.getElementById("precioDescuento").value = descuentoE;
            alert("Usted pago 10% de IIBB, siendo $" + IIBB + " el impuesto abonado. Total: $" + descuentoE + ". Precio sin IIBB: $" + descuento + ".");

        }
        else {
            document.getElementById("precioDescuento").value = descuento;

        }    
    }
    // 5 lámparas.
    else if(lamparitas == 175) {
        if(marca == "ArgentinaLuz") {
            descuento = lamparitas - (lamparitas * 0.4);
            document.getElementById("precioDescuento").value = descuento;
        }
        else {
            descuento = lamparitas - (lamparitas * 0.3);
            document.getElementById("precioDescuento").value = descuento;
        }                    
    }
    // 4 lámparas.
    else if(lamparitas == 140) {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = lamparitas - (lamparitas  *  0.25);
            document.getElementById("precioDescuento").value = descuento;        
        }
        else {
            descuento = lamparitas - (lamparitas * 0.2);
            document.getElementById("precioDescuento").value = descuento;  
        }
    }
    // 3 lámparas.
    if(lamparitas == 105) {
        if(marca == "ArgentinaLuz") {
            descuento = lamparitas - (lamparitas * 0.15);
            document.getElementById("precioDescuento").value = descuento;  
        }
        else if(marca == "FelipeLamparas") {
            descuento = lamparitas - (lamparitas * 0.1);
            document.getElementById("precioDescuento").value = descuento;
        }
        else {
            descuento = lamparitas - (lamparitas * 0.05);
            document.getElementById("precioDescuento").value = descuento;
        }

    }
    // 0 1 2 lámparas.
    else if(lamparitas < 105) {
        document.getElementById("precioDescuento").value = lamparitas;
    }




        
     
    
    



 	
}
