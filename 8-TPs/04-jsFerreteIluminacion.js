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
    var cantidadLamparitas;
    var precioFinal;
    var precioTotalConDescuento;
    var impuestoIIBB;
    var precioUnitarioLampara;
    var marcaLampara;

    precioUnitarioLampara = 35;
    cantidadLamparitas = parseInt(txtIdCantidad.value);
    marcaLampara = Marca.value;
    precioFinal = cantidadLamparitas * precioUnitarioLampara;

    
    switch (cantidadLamparitas) {
        case 0:
            txtIdprecioDescuento.value = 0;
        case 1:
        case 2:
            txtIdprecioDescuento.value = precioFinal;
        break;
        case 3:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento = 0.15;
                break;
                case "FelipeLamparas":
                    descuento = 0.10;
                break;
                default:
                    descuento = 0.05;
                break;
            }
        break;
        case 4:
            switch (marcaLampara){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.25;
                break;
                default:
                    descuento = 0.20;
                break;
            }
        break;
        case 5:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento = 0.40;
                break;
                default:
                    descuento = 0.30;
                break;
            }
        break;
        default:
            descuento = 0.50;
        break;
    }
    precioTotalConDescuento = precioFinal - (precioFinal * descuento);
    txtIdprecioDescuento.value = precioTotalConDescuento;
    
    if(precioTotalConDescuento > 120){
        impuestoIIBB = precioTotalConDescuento * 0.10;
        precioTotalConDescuento = precioTotalConDescuento + impuestoIIBB;
         
        txtIdprecioDescuento.value = precioTotalConDescuento;
        alert("Usted pago $" + impuestoIIBB + " de IIBB");   
    }
}
    /*switch (marcaLampara) {
        case "ArgentinaLuz":
            switch (cantidadLamparitas) {
                case 3:
                    descuento = 0.15;
                break;
                case 4:
                    descuento = 0.25;
                break;
                case 5:
                    descuento = 0.40;
                default:
                    break;
            }
        break;
        default:
        break;
    }*/

    //precioTotalConDescuento = precioFinal - (precioFinal * descuento);
    //txtIdprecioDescuento.value = precioTotalConDescuento;
    

    /*if(cantidadLamparitas > 5){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.50);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 5 && marcaLampara == "ArgentinaLuz"){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.40);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 5 && marcaLampara != "ArgentinaLuz"){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.30);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 4 && (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.25);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 4 && (marcaLampara != "ArgentinaLuz" && marcaLampara != "FelipeLamparas")){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.20);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 3 && marcaLampara == "ArgentinaLuz"){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.15);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 3 && marcaLampara == "FelipeLamparas"){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.10);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else if(cantidadLamparitas == 3 && (marcaLampara != "FelipeLamparas" && marcaLampara != "ArgentinaLuz")){
        precioTotalConDescuento = precioFinal - (precioFinal * 0.05);
        txtIdprecioDescuento.value = precioTotalConDescuento;
    }
    else{
        txtIdprecioDescuento.value = precioFinal;

    } 
    if(precioTotalConDescuento > 120){
        impuestoIIBB = precioTotalConDescuento * 0.10;
        precioTotalConDescuento = precioTotalConDescuento + impuestoIIBB;
         
        txtIdprecioDescuento.value = precioTotalConDescuento;
        alert("Usted pago $" + impuestoIIBB + " de IIBB");
    }
} // De tarea utilizar

/*function CalcularPrecio () 
{
 	var cantidadLamparitas;
    var descuento;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var marcaLampara;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //Mayor 5
        //aplicar descuento del 50%.
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                //descuento del 40 %
            }
            else
            {
                //el otro descuento
            }
        }
        else
        {
            
        }
    }
}*/
