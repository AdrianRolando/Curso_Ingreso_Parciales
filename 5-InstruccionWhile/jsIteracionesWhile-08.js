/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while (respuesta != "no") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		if(numeroIngresado >= 0 ){
		sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else{
		multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("¿Quiere seguir ingresando numeros? Ingrese si / no");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN