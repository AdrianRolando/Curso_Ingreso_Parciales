/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{
    var numUno; //Declaramos las variables
    var numDos;
    var resta;
    var suma;
    numUno = parseInt(prompt("Ingrese el primer número")); //Asignamos el valor mediante un prompt() 
    numDos = parseInt(prompt("Ingrese el segundo número")); //Cambiamos el valor String a Int con parseInt()
    resta = numUno - numDos; //Asignamos el valor mediante una operacion matemática
    suma = numUno + numDos;

    if(numUno == numDos){ // Establecemos condiciones y mostramos los resultados por pantalla
        alert("Los números concatenados son "+ numUno + "" +numDos);
    }
    else if(numUno > numDos){
        alert("El resultado de la resta es "+ resta);
    }
    else if(numUno < numDos && suma > 10){
        alert("La suma es "+ suma + " y supero el 10");
    }
    else{
        alert("El resultado de la suma es " + suma);
    }
}
