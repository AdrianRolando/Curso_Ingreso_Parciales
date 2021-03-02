/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{   
	var edadString; //Declaración.
	var edad;
    edadString = txtIdEdad.value; //Asignamos mediante el ID.
    edad = parseInt(edadString); //Cambiamos el valor String a Int mediante parseInt().
    
	if(edad >= 18){ //Establecemos la condición y si se cumple mostramos por pantalla el mensaje.
		alert("La edad ingresada corresponde a un mayor de edad");
    }
}