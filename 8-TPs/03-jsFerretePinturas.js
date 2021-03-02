/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaración
    var temperaturaFahrenheit;
    var temperaturaFahrenheitParseado;
    var calcularEnCentigrados;
    var temperaturaCentigrados;

    //Asignación mediante ID
    temperaturaFahrenheit = txtIdTemperatura.value;
    
    //Convertimos el tipo de dato string en float mediante parseFloat()
    temperaturaFahrenheitParseado = parseFloat(temperaturaFahrenheit);
    
    //Transformamos Fahrenheit a Centígrados
    calcularEnCentigrados = (temperaturaFahrenheitParseado - 32) * 5/9;

    //Asignamos el valor correpondiente a Centígrados
    temperaturaCentigrados = calcularEnCentigrados;

    //Mostramos por pantalla el resultado
    alert (temperaturaFahrenheit + " Fahrenheit son " + temperaturaCentigrados + " Centígrados")

}

function CentigradosFahrenheit () 
{
    //Declaración
    var temperaturaCentigrados;
    var temperaturaCentigradosParseado;
    var calcularEnFahrenheit;
    var temperaturaFahrenheit;

    //Asignación mediante ID
    temperaturaCentigrados = txtIdTemperatura.value;

    //Convertimos el tipo de dato string en int mediante parseInt()
    temperaturaCentigradosParseado = parseInt(temperaturaCentigrados);

    //Transformamos Centígrados en Fahrenheit
    calcularEnFahrenheit = (temperaturaCentigradosParseado / 5) * 9 + 32;

    //Asignamos el valor correspondiente a Fahrenheit
    temperaturaFahrenheit = calcularEnFahrenheit;

    //mostramos por pantalla el resultado
    alert (temperaturaCentigrados + " Centígrados son " + temperaturaFahrenheit + " Fahrenheit");
	
}
