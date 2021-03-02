/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{   
	//Declaración
	var dividendo;
	var divisor;
	var resultado;
	var dividendoPars;
	var divisorPars;

	//Asignación mediante ID
	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;
	
	//Cambiamos el valor string al tipo de dato int con parseInt()
	dividendoPars = parseInt(dividendo);  
	divisorPars = parseInt(divisor);
	
	//Calculamos el resto
	resultado = dividendoPars % divisorPars;

	//Mostrar resultado
	alert("El resto de esta división es " + resultado);
}
