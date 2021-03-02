/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaración
	var importe;
	var importePars;
	var aumento;
	var importeConAumento;
	
	//Asignación del valor de aumento
	aumento = 10;

    //Asignación mediante ID
	importe = txtIdSueldo.value;

	//Cambiamos el valor string al tipo de dato int con parseInt()
	importePars = parseInt(importe);

	//Calcular aumento del 10%
	aumento = importePars * aumento / 100;

	//Sumar el aumento al importe
	importeConAumento = importePars + aumento;

	//Mostrar aumento en el ID
	txtIdResultado.value = importeConAumento;

	



	
}
