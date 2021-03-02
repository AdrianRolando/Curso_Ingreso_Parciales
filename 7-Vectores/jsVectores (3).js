/*al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write().*/

function mostrar()
{
	var numero;
	var numerosIngresados = [];

	for(var i =0; i<5; i++){
	numero=parseInt(prompt("Ingrese un numero"));
	numerosIngresados.push(numero);
	}
	document.write(numerosIngresados);
	
}//FIN DE LA FUNCIÓN