/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destino;
	destino = txtIdDestino.value;

	switch (destino) {
		case("Bariloche"):
			alert("Hace FRIO")	
			break;
		case("Cataratas"):
			alert("Hace CALOR");
			break;
		case("Mar del plata"):
			alert("Hace CALOR");
			break;
		case("Ushuaia"):
			alert("Hace FRIO");
			break;
	}
}//FIN DE LA FUNCIÓN