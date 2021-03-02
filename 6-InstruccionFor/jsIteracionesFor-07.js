/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{
	var numero;
	var numerosIngresados;
	var suma=0;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;

	numerosIngresados=[];

	for(i=0; i<5; i++){
		numero=parseInt(prompt("Ingrese número"));
		numerosIngresados.push(numero);
		suma = suma + numero;
	}
	for(i=0; i<5; i++){
		if(numerosIngresados[i]>numerosIngresados[i+1]){
			numeroMaximo=numerosIngresados[i];
		}
		

	}
	promedio = suma / numerosIngresados.length;

	document.write(numeroMaximo);
	

	/*if(flag == true){
			
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		flag = false;
	}
	else{
			if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
			}
			else if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
			}
		}*/
	
	/*var repeticiones;
	var restoDivision;
	var divisores = 0;


	repeticiones = parseInt(prompt("Ingrese cantidad de repeticiones"));

	for(var i=1; i<repeticiones+1; i++){
		restoDivision=repeticiones/i;
		if(restoDivision % 2 == 0){
			alert(i);
			divisores++;
		}
	}
	alert("Cantidad de divisores ingresados " + divisores);*/

	


}//FIN DE LA FUNCIÓN