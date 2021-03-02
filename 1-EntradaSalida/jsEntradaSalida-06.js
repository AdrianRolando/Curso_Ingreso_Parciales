/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaración
    var numeroUno;
	var numeroDos;
	var numeroUnoPars;
	var numeroDosPars;
	var resultado;

	//Asignación
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Asignación aplicando el método ParseInt()
	numeroUnoPars = parseInt(numeroUno);
	numeroDosPars = parseInt(numeroDos);
	
	//Asignación aplicando una suma de enteros
	resultado = (numeroUnoPars + numeroDosPars);

    //Mostrar
	alert("La suma es " + resultado);
	
}

