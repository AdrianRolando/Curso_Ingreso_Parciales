/*al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{
	var repeticiones;
	repeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones"));

	for(var i=0; i < repeticiones ; i++){
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN