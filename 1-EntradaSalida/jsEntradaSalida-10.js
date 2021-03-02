/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaración
	var importe;
	var importePars;
	var descuento;
	var importeConDescuento;
	
	//Asignación del valor de descuento
	descuento = 25;

	//Asignación mediante ID
	importe = txtIdImporte.value;

	//Cambiamos el valor string al tipo de dato int con parseInt()
	importePars = parseInt(importe);

	//Calcular descuento del 25%
	descuento = importePars * descuento / 100;

	//Restar el descuento al importe
	importeConDescuento = importePars - descuento;

	//Mostrar descuento en el ID
	txtIdResultado.value = importeConDescuento;
}
