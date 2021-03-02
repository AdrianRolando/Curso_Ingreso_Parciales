/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destino;
	destino = txtIdDestino.value;

	switch (destino) {
		case("Bariloche"):
			alert("Esta ubicada al Oeste")	
			break;
		case("Cataratas"):
			alert("Estan ubicadas al Norte");
			break;
		case("Mar del plata"):
			alert("Esta ubicada al Este");
			break;
		case("Ushuaia"):
			alert("Esta ubicada al Sur");
			break;
	}
}//FIN DE LA FUNCIÓN