/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
	var repeticiones;

	repeticiones = parseInt(prompt("Ingrese un número"));

	for(var i =2; i<repeticiones+1; i++){
		
		if(i/1 == i && i/i == 1 ){
			alert("El número "+ i +" es primo");
		}
	}


	

}//FIN DE LA FUNCIÓN