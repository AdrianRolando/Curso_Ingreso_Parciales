/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	var edad;
	var estado_Civil;
	edad = txtIdEdad.value;
	estado_Civil = estadoCivil.value;
	edad = parseInt(edad);
 
	if(estado_Civil == "Soltero" & edad >= 18){
		alert("Es soltero y no es menor");
	}
} // Fin de la función
	

	
	


