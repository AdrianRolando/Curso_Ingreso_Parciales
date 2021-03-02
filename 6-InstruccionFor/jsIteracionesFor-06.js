/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	var repeticiones;
	var cantidadPares = 0;

	repeticiones = parseInt(prompt("Ingrese cantidad de repeticiones"));

	for(var i=1; i<repeticiones+1; i++){
		if(i % 2 == 0){
			alert(i);
			cantidadPares++;
		}
	}
	alert("Cantidad de numeros pares ingresados " + cantidadPares);






}//FIN DE LA FUNCIÓN