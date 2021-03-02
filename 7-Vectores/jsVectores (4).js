/*al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros.*/

function mostrar()
{
	var numero;
	var numerosIngresados;
	var suma = 0;

	numerosIngresados =[];

	for (i=0; i<5; i++){
		numero=parseInt(prompt("Ingrese un número"));
		numerosIngresados.push(numero);
		suma = suma + numero;
	}
	document.write(numerosIngresados + " La suma de los mismos es " + suma);
	
}//FIN DE LA FUNCIÓN