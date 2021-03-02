/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//Declaración
	var dato; 
	
	//Asignación mediante prompt()
	dato = prompt("Ingrese Dato");

    //Asignación de valor al ID con la variable y Mostrar  
	txtIdNombre.value = dato;

}

