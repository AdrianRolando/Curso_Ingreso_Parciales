/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano*/
function probarEjercicio()
{
	
	var tipoMascota;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var perroMasPesado;
	var flagPerroMasPesado = true;
	var contadorEnfermos= 0;
	var contadorInternados= 0;
	var contadorAdopcion= 0;
	var totalMascotas= 0;
	var porcentajeEnfermos= 0;
	var ultimoNombreOtraCosa = "No se ingresaron";
	var minTemperatura;
	var flagMinTemperatura = true;
	var tipoMascotaMinTemp;
	var flagMaxTemp = true;
	var maxTemperatura;
	var tipoMascotaMayorTemp;
	var contadorPerrosGatos = 0;
	var porcentajePerrosGatos = 0;
	var pesoTotalMascotas= 0;
	var promedioPesoMascotas = 0;
	var flagMinPesoGato = true;
	var minPesoGato;
	var nombreGatoLiviano = "No hubo ingreso";
	var razaGatoLiviano= "No hubo ingreso";
	var menorEstadoMascota;
	var continuar;

	
		do
		{
		
			tipoMascota = prompt("Ingrese tipo de mascota (perro/gato/otra cosa");
			while(tipoMascota != "perro" && tipoMascota != "gato" && tipoMascota != "otra cosa")
			{
				tipoMascota = prompt("Por favor ingrese un tipo de mascota válido");
			}

			tipoPelaje = prompt("Ingrese el largo del pelaje (corto/largo/sin pelo)");
			while(tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo")
			{
				tipoPelaje = prompt("Largo de pelaje incorrecto, ingrese nuevamente");
			}

			edadMascota = parseInt(prompt("Ingrese edad de la mascota"));
			while(isNaN(edadMascota) || edadMascota == ""){

				edadMascota = prompt("Edad incorrecta, ingrese nuevamente");
			}

			nombreMascota = prompt("Ingrese nombre de la mascota");
			while(isNaN(nombreMascota) == false || nombreMascota == ""){

				nombreMascota = prompt("Nombre incorrecto, ingrese nuevamente");
			}

			razaMascota = prompt("Ingrese raza de la mascota");
			while(isNaN(razaMascota) == false || razaMascota == "")
			{
				razaMascota = prompt("Raza incorrecta, ingrese nuevamente");
			}

			pesoMascota = parseInt(prompt("Ingrese el peso de la mascota"));
			while(isNaN(pesoMascota) || pesoMascota == ""){

				pesoMascota = parseInt(prompt("Peso incorrecto, ingrese nuevamente"));
			}

			estadoClinico = prompt("Ingrese estado clínico (enfermo/internado/adopcion)");
			while(isNaN(estadoClinico) == false || estadoClinico == "")
			{
				estadoClinico = prompt("Estado clínico incorrecto, ingrese nuevamente");
			}

			temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal (entre 34 y 38 grados)"));
			while(isNaN(temperaturaCorporal) || temperaturaCorporal == ""|| temperaturaCorporal < 34 || temperaturaCorporal > 38)
			{
				temperaturaCorporal = parseInt(prompt("Temperatura incorrecta, ingrese nuevamente"));
			}

			
			totalMascotas ++;
			pesoTotalMascotas = pesoTotalMascotas + pesoMascota;
			promedioPesoMascotas = pesoTotalMascotas / totalMascotas;

			
			if(tipoMascota == "perro") 
			{
				if(flagPerroMasPesado == true)
				{
					perroMasPesado = pesoMascota;
					flagPerroMasPesado = false;
				}
				else if(pesoMascota > perroMasPesado)
				{
					perroMasPesado = pesoMascota;
				}
				else{

					perroMasPesado = 0;
				}
				
			}
			else if(tipoMascota == "otra cosa") 
			{
				ultimoNombreOtraCosa = nombreMascota;
					
			}
			else if(tipoMascota == "gato" && tipoPelaje == "sin pelo"){
				
				if(flagMinPesoGato == true){
					minPesoGato = pesoMascota;
					nombreGatoLiviano = nombreMascota;
					razaGatoLiviano = razaMascota;
					flagMinPesoGato = false;
				}
				else if(pesoMascota < minPesoGato){
					minPesoGato = pesoMascota;
					nombreGatoLiviano = nombreMascota;
					razaGatoLiviano = razaMascota;
				}
			}

			
			if(tipoMascota == "perro" || tipoMascota == "Gato")
			{
				contadorPerrosGatos++;
			}

			
			
			if(estadoClinico == "enfermo")
			{
				contadorEnfermos++;
			}
			else if(estadoClinico == "internado")
			{
				contadorInternados++;
			}
			else if(estadoClinico == "adopcion")
			{
				contadorAdopcion++;
			}



			if(contadorEnfermos < contadorAdopcion && contadorEnfermos < contadorInternados){

				menorEstadoMascota = "Enfermo";
			}
			else if (contadorAdopcion < contadorEnfermos && contadorAdopcion < contadorInternados){
				
				menorEstadoMascota = "Adopcion";
			}
			else if (contadorInternados < contadorEnfermos && contadorInternados < contadorAdopcion){
				
				menorEstadoMascota = "Internado";
			}


			
			if(tipoPelaje == "sin pelo" && flagMinTemperatura == true)
			{
				minTemperatura = temperaturaCorporal;
				tipoMascotaMinTemp = tipoMascota;
				flagMinTemperatura = false;
			}
			else if(temperaturaCorporal < minTemperatura){
					
				minTemperatura = temperaturaCorporal;
				tipoMascotaMinTemp = tipoMascota;
			}

			
			if(flagMaxTemp == true)
			{
				maxTemperatura = temperaturaCorporal;
				tipoMascotaMayorTemp = tipoMascota;
				flagMaxTemp = false;
			}
			else if(temperaturaCorporal > maxTemperatura)
			{	
				maxTemperatura = temperaturaCorporal;
				tipoMascotaMayorTemp = tipoMascota;
			}
		}
		while(confirm(continuar));

    porcentajesEnfermos = contadorEnfermos * 100 / totalMascotas;
	porcentajePerrosGatos = contadorPerrosGatos * 100 / totalMascotas;
	

	document.write("Mascota : " + tipoMascota + "<br>");
	document.write("Pelaje : " + tipoPelaje + "<br>");
	document.write("Edad : " + edadMascota + "<br>");
	document.write("Nombre : " + nombreMascota + "<br>");
	document.write("Raza : " + razaMascota + "<br>");
	document.write("Peso : " + pesoMascota + " grs" + "<br>");
	document.write("Estado : " + estadoClinico + "<br>");
	document.write("Temperatura : " + temperaturaCorporal + " grados" + "<br>");
	document.write("Perro mas pesado : " + perroMasPesado + "<br>");
	document.write("Enfermos " + contadorEnfermos + "<br>");
	document.write("Nombre Tipo Otra Cosa : " + ultimoNombreOtraCosa + "<br>");
	document.write("Mascota minima temperatura sin pelo : " + tipoMascotaMinTemp + "<br>");
	document.write("Mascota con mayor temperatura : " + tipoMascotaMayorTemp + "<br>");
	document.write("Menor cantidad Estado Clinico " + menorEstadoMascota + "<br>");
	document.write("Nombre gato mas liviano " + nombreGatoLiviano + "<br>");
	document.write("Raza gato mas liviano " + razaGatoLiviano + "<br>");
	document.write("Porcentaje Enfermos " + porcentajeEnfermos + "%" + "<br>");
	document.write("Porcentaje Perros y Gatos " + porcentajePerrosGatos + " %" + "<br>");
	document.write("Promedio peso de mascotas " + promedioPesoMascotas + "<br>");
}
