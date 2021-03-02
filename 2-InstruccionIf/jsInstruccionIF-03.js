/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{   
	var edadString;
	var edad;
    edadString = txtIdEdad.value;
    edad = parseInt(edadString);
    
	if(edad >= 18){
		alert("Sos mayor de edad");
	}
	else{
		alert("Sos menor de edad");
	}
}