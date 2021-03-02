/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

function mostrar()
{
	var edad;
	var estado_Civil;
	edad = txtIdEdad.value;
	estado_Civil = estadoCivil.value;
	edad = parseInt(edad);

	if (edad < 18 & estado_Civil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
	else{
		alert("Intente nuevamente");
	}
}