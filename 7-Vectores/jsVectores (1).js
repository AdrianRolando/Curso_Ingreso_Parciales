/*al presionar el botón mostrará 10 números
que estaran contenidos en un vector.*/

function mostrar()
{
	var numeros = [10,20,32,40,22,67,98,100,45,230];

	for(var i = 0; i<numeros.length; i++){
		alert("Numero en indice "+ i +" "+ numeros[i]);
	};
}//FIN DE LA FUNCIÓN