/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaración
	var numeroUno;
	var numeroDos;
	var resultado;

    //Asignación
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	resultado = (parseInt(numeroUno) + parseInt(numeroDos));

	//Mostrar
	alert("La suma es " + resultado);
		
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resultado = (parseInt(numeroUno) - parseInt(numeroDos));

	alert("La resta es " + resultado);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resultado = (parseInt(numeroUno) * parseInt(numeroDos));

	alert("El producto es " + resultado);
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	resultado = (parseInt(numeroUno) / parseInt(numeroDos));

	alert("El cociente es " + resultado);
}

