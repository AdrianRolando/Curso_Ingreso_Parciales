//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

function mostrar()
{
    //Genero el número RANDOM entre 1 y 10 
    var numeroRandom;
    numeroRandom = Math.random()* 100;
    if (numeroRandom  >= 1 && numeroRandom <= 10){
        alert(numeroRandom);
    }
}
	
	/*var numero;
	numero = Math.floor(Math.random() * 20) + 1;

	if(numero <= 10){
		alert(numero);
	}
	else{
		alert("Número incorrecto");
	}*/
