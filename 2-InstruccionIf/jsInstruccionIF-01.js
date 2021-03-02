/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

function mostrar()
{   
	var edadString; //Declaración.
	var edad;
    edadString = txtIdEdad.value; //Asignamos la edad mediante ID.
	edad = parseInt(edadString); //Cambiamos el valor String a Int mediante parseInt().
    
	if(edad == 15){ //Establecemos la condición y mostramos por pantalla la respuesta si se cumple la condición.
		alert("Niña bonita");
    }else{
		alert("Vuelva a ingresar su edad");
	}
}