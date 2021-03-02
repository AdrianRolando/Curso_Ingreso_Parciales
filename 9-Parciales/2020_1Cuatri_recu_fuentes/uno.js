/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{

	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProductos;
	var marcaProducto;
	var fabricanteProducto;
	var flagJabon = true;
	var maximoPrecioJabon;
	var maximoCantidadJabon;
	var maximoCantidadFabricante;

	
	var maximoCantidadProductos;
	var maximoTipoProducto;
	var precioTotalMayorProducto;

	var cantidadBarbijosTotal = 0;
	

	for (var i=0; i<5; i ++)
	{
		tipoProducto = prompt("Ingrese el tipo de producto (jabon/alcohol/barbijo");
		while(tipoProducto != "jabon" && tipoProducto != "alcohol" && tipoProducto != "barbijo")
		{
			tipoProducto=prompt("Producto incorrecto, ingrese nuevamente (jabon/alcohol/barbijo)");
		}

		precioProducto = parseInt(prompt("Ingrese el precio del producto (entre $100 y $300)"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300){

			precioProducto = parseInt(prompt("Valor incorrecto, ingrese nuevamente (entre $100 y $300)"));
		}

		cantidadUnidadesProductos = parseInt(prompt("Ingrese la cantidad a comprar (Max 1000)"));
		while(isNaN(cantidadUnidadesProductos) || cantidadUnidadesProductos < 1 || cantidadUnidadesProductos > 1000){

			cantidadUnidadesProductos = parseInt(prompt("Cantidad incorrecta, ingrese nuevamente (Max 1000)"));
		}

		marcaProducto = prompt("Ingrese la marca");
		while(isNaN(marcaProducto) == false || marcaProducto == "")
		{
			marcaProducto = prompt("Marca Incorrecta, ingresela nuevamente");
		}

		fabricanteProducto = prompt("Ingrese el fabricante");
		while(isNaN(fabricanteProducto) == false || fabricanteProducto == "")
		{
			fabricanteProducto = prompt("Fabricante incorrecto, ingrese nuevamente");
		}

		if(tipoProducto == "jabon")
		{
			if(flagJabon == true)
			{
				maximoPrecioJabon = precioProducto;
				maximoCantidadJabon = cantidadUnidadesProductos;
				maximoCantidadFabricante = fabricanteProducto;
				flagJabon = false;
			}
			else if(precioProducto > maximoPrecioJabon)
			{
				maximoPrecioJabon = precioProducto;
				maximoCantidadJabon = cantidadUnidadesProductos;
				maximoCantidadFabricante = fabricanteProducto;
			}

		}

		if(i==0)
		{
			maximoCantidadProductos = cantidadUnidadesProductos;
			maximoTipoProducto = tipoProducto;
			precioTotalMayorProducto = precioProducto;
		}
		else if(cantidadUnidadesProductos > maximoCantidadProductos)
		{
			maximoCantidadProductos = cantidadUnidadesProductos;
			maximoTipoProducto = tipoProducto;
			precioTotalMayorProducto = precioProducto;

		}

		if(tipoProducto == "barbijo"){

			cantidadBarbijosTotal = cantidadBarbijosTotal + cantidadUnidadesProductos;

		}
		

		console.log("Producto " + tipoProducto);
		console.log("Precio Producto " + precioProducto);
		console.log("Cantidad Unidades " + cantidadUnidadesProductos);
		console.log("Marca " + marcaProducto);
		console.log("Fabricante " + fabricanteProducto);
		
		console.log("Max Precio Jabon " + maximoPrecioJabon);
		console.log("Max Cantidad Jabon " + maximoCantidadJabon);
		console.log("Max Fabricante " + maximoCantidadFabricante);

		console.log("Max Cantidad Producto " + maximoCantidadProductos);
		console.log("Max tipo de producto " + maximoTipoProducto);
		console.log("Max precio promedio total " + precioTotalMayorProducto);

		console.log("Cantidad Total Barbijos " + cantidadBarbijosTotal);


	}
	
	
	
	
}	
	
	/*//tipoProducto : barbijo jabon alcohol
	// precioProducto
	// cantidadUnidadesProducto
	// marcaProducto
	// fabricanteProducto
	// maximoJabon
	// cantidadJabonMaxUnidades
	// maximoJabonFabricante

	

	//for de 5 vueltas porque ya sabemos la cantidad determinada (se puede obviar banderas)
	//pedirTipoProducto --- > Validar
	//precioProducto ---- > Validar
	//...
	//Es jabon --- las condiciones ---
	//canUnidades --- 


	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var maximoJabon;
	var cantidadJabonMaxUnidades;
	var maximoJabonFabricante;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	


	//tipoProducto = prompt("Ingrese el tipo de producto que necesita (barbijo/jabon/alcohol");
	//cantidadUnidadesProducto = parseInt(prompt("Ingrese la cantidad que necesita"));

	/*for(var i = 0;i<5;i++){
		do {
			tipoProducto = prompt("Ingrese tipo de producto(barbijo/jabon/alcohol)");
		}while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do {
			precioProducto = parseInt(prompt("Ingrese el precio (entre 100 y 300"));
		}while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300);

		do {
			cantidadUnidadesProducto = parseInt(prompt("Ingrese cantidad que necesita (max 1000)"));
		}while (isNaN(cantidadUnidadesProducto) ||  cantidadUnidadesProducto < 1 || cantidadUnidadesProducto > 1000);

		do{
			marcaProducto= prompt("Ingrese la marca del producto");
		}while(isNaN(marcaProducto)==true);

		do{
			fabricanteProducto = prompt("Ingrese fabricante del producto");
		}while(isNaN(fabricanteProducto)==true);


		switch (tipoProducto) {
			case "jabon":
				contadorJabon++
				maximoJabon=precioProducto;
				if(contadorJabon==1 || precioProducto > maximoJabon){
					maximoJabon=precioProducto;
					cantidadJabonMaxUnidades=cantidadUnidadesProducto;
					maximoJabonFabricante=fabricanteProducto; 
				}

				
				break;
			case "alcohol":

				break;
			case "barbijo":

			break;
		
			default:
				break;
		}
		 
	}*/

	/*var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var maximoPrecioJabon;
	var cantidadJabonMaxUnidades;
	var maximoJabonFabricante;
	var mayorCAntidadPorUnidad;
	var tipoConMayorCantidades;
	var promedioDelMayor;
	var precioDelMayor;
	var flagjabon = true;
	var acumuladorBarbijoPrecio = 0;

	for(var i=0;i<5;i++)
	{
		tipoProducto=prompt("Ingrese tipo de producto (jabon/alcohol/barbijo)");
		while (tipoProducto != "jabon" && tipoProducto !="alcohol" && tipoProducto !="barbijo")
		{
			tipoProducto=prompt("Hubo un error ingrese nuevamente");
		}

		precioProducto = parseInt(prompt("Ingrese precio"));
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseInt(prompt("Hubo un error ingrese nuevamente"));
			precioProducto = parseInt(prompt("Ingrese precio"));
		}
		cantidadUnidadesProducto = parseInt(prompt("Ingrese cantidades"));
		while (isNaN(precioProducto) || cantidadUnidadesProducto < 1 || cantidadUnidadesProducto > 1000)
		{
			cantidadUnidadesProducto = parseInt(prompt("Hubo un error ingrese nuevamente"));
			cantidadUnidadesProducto = parseInt(prompt("Ingrese cantidades"));
		}

		marcaProducto=prompt("Ingrese la marca del producto");
		while (isNaN(marcaProducto)==false || marcaProducto == ""){
			marcaProducto = prompt("Ingrese la marca nuevamente");
		}

		fabricanteProducto=prompt("Ingrese el fabricante del producto");
		while (isNaN(fabricanteProducto)==false || fabricanteProducto == ""){
			fabricanteProducto= prompt("Ingrese el fabricante nuevamente");
		}

		if(tipoProducto == "jabon")
		{
			if(flagjabon==true)
			{
				maximoPrecioJabon=precioProducto;
				cantidadJabonMaxUnidades=cantidadUnidadesProducto;
				maximoJabonFabricante=fabricanteProducto;
				flagJabon=false;
			}
			else if(precioProducto > maximoPrecioJabon)
			{
				maximoPrecioJabon=precioProducto;
				cantidadJabonMaxUnidades=cantidadUnidadesProducto;
				maximoJabonFabricante=fabricanteProducto;

			}

		}

	
		if(i==0) // es la primera vez, la primera vuelta
		{
			mayorCAntidadPorUnidad = cantidadUnidadesProducto;
			tipoConMayorCantidades = tipoProducto;
			precioDelMayor = precioProducto;
		}
		else if(cantidadUnidadesProducto > mayorCAntidadPorUnidad)
		{
			mayorCAntidadPorUnidad = cantidadUnidadesProducto;
			tipoConMayorCantidades = tipoProducto;
			precioDelMayor = precioProducto;
		} 





		/*console.log("Marca:" + marcaProducto);
		console.log("fabricante:" + fabricanteProducto);
		console.log("cantidad unidades" + cantidadUnidadesProducto);
		console.log("Precio" + precioProducto);
		console.log("Tipo" + tipoProducto);*/





	/*}
	if(flagJabon==false)
	{
		document.write("Nunca se ingresaron tipo de jabones </br>");

	}
	else
	{
		document.write("El fabricante del jabon mas caro es:"+ maximoJabonFabricante + "</br>");
	}
	document.write("");

	

}*/
