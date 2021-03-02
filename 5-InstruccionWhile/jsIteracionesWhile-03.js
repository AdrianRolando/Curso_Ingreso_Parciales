/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750"){
	alert("Clave incorrecta! Ingrese nuevamente");
	claveIngresada = prompt("Ingrese la clave.");
	}

	alert ("Clave ingresada correctamente");
}//FIN DE LA FUNCIÓN
