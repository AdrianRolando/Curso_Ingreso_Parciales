/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaración
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;
    var precioUnoPars;
    var precioDosPars;
    var precioTresPars;

    //Asginación mediante ID
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    ////Cambiamos el valor string al tipo de dato int con parseInt()
    precioUnoPars = parseInt(precioUno);
    precioDosPars = parseInt(precioDos);
    precioTresPars = parseInt(precioTres);

    //Calcular la suma
    resultadoSuma = precioUnoPars + precioDosPars + precioTresPars;

    //Mostrar resultado
    alert("El resultado de la suma de productos es: " + "$" + resultadoSuma);

    
}
function Promedio () 
{
    //Declaración
    var precioUno;
    var precioDos;
    var precioTres;
    var resultadoPromedio;
    var precioUnoPars;
    var precioDosPars;
    var precioTresPars;

    //Asginación mediante ID
    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    ////Cambiamos el valor string al tipo de dato int con parseInt()
    precioUnoPars = parseInt(precioUno);
    precioDosPars = parseInt(precioDos);
    precioTresPars = parseInt(precioTres);

    //Calcular el promedio
    resultadoPromedio = (precioUnoPars + precioDosPars + precioTresPars) / 3;

    //Mostrar resultado
    alert("El resultado del precio promedio de productos es " + "$" + resultadoPromedio);
	
}
function PrecioFinal () 
{
     //Declaración
     var precioUno;
     var precioDos;
     var precioTres;
     var resultadoConIva;
     var precioUnoPars;
     var precioDosPars;
     var precioTresPars;
 
     //Asginación mediante ID
     precioUno = txtIdPrecioUno.value;
     precioDos = txtIdPrecioDos.value;
     precioTres = txtIdPrecioTres.value;
 
     ////Cambiamos el valor string al tipo de dato int con parseInt()
     precioUnoPars = parseInt(precioUno);
     precioDosPars = parseInt(precioDos);
     precioTresPars = parseInt(precioTres);
 
     //Calcular el precio final con el IVA de 21%
     resultadoConIva = (precioUnoPars + precioDosPars + precioTresPars) * 1.21;
 
     //Mostrar Precio Final
     alert("Precio Final con IVA 21% incluído: " + "$" + resultadoConIva);
	
}