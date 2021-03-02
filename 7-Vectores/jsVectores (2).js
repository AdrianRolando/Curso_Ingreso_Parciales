/*al presionar el botón se mostrará 5 nombres
que estaran contenidos en un vector.*/
function mostrar()
{
	var nombre;
	var nombresIngresados = [];

	for(i=0; i<5; i++){
		nombre=prompt("Ingrese un nombre");
		nombresIngresados.push(nombre);
	}
	document.write(nombresIngresados);

}//FIN DE LA FUNCIÓN