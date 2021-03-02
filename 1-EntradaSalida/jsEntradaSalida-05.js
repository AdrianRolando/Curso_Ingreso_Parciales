/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Delcaración
	var nombre;
	var edad;

    //Asignación
	nombre = txtIdNombre.value;
    edad = txtIdEdad.value;

	//Concatenar(+) y Mostrar
	alert ("Usted se llama " + nombre + " y tiene " + edad + " años");


}

