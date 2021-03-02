function mostrar()
{
   //Declaración
   var precio;
   var descuento;
   var porcentaje;
   var calculoDescuento;
   var precioFinal;
   var precioPars;
   var descuentoPars;
   var porcentajePars;

   //Asignación mediante prompt()
   precio = prompt("Ingrese un precio");
   descuento = prompt("Ingrese porcentaje de descuento");

   //Cambiamos el valor string al tipo de dato int con parseInt()
   precioPars = parseInt(precio);
   descuentoPars = parseInt(descuento);
   porcentajePars = parseInt(porcentaje);
   
   //Asignación mediante operaciones
   porcentajePars = (descuentoPars / 100);
   calculoDescuento = (precioPars * porcentajePars);
   precioFinal = (precioPars - calculoDescuento);

   //Mostrar valor final por ID
   elPrecioFinal.value = precioFinal;

   
}
