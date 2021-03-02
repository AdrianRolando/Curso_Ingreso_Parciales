/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaración
	var nombreIngresado;
	
	//Asignación de valor por ID
	nombreIngresado=txtIdNombre.value;

	//Otra forma de asignar por ID
	//nombreIngresado=document.getElementById("txtIdNombre").value;
	
	//Mostrar
	alert("Bienvenido "+ nombreIngresado + "!");

}


