/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaración
    var alambre;
    var ancho;
    var largo;
    var anchoParseado;
    var largoParseado;
    var perimetroRectangular;
    var cantidadDeAlambre;

    //Asignación de la cantidad de hilos de alambre
    var alambre = 3;

    //Asignación mediante ID
    ancho = txtIdLargo.value;
    largo = txtIdAncho.value;

    //Cambiamos el valor string por int con parseInt()
    anchoParseado = parseInt(ancho);
    largoParseado = parseInt(largo);

    //Calcular perímetro del rectangulo
    perimetroRectangular = (2*anchoParseado) + (2*largoParseado);

    //Calculamos la cantidad de alambre a comprar
    cantidadDeAlambre = perimetroRectangular * alambre;

    //Mostrar resultado por mensaje
    alert("Se necesitan "+ cantidadDeAlambre + " mts de alambre");

}
function Circulo () 
{
    //Declaración
    var radio;
    var radioParseado;
    var alambre;
    var circunferencia;
    var cantidadDeAlambre;
    var pi;
    
    //Asignación de cantidad de hilos de alambre
    alambre = 3;

    //Asignación del valor de pi
    pi = 3.14;

    // Asignación mediante ID
    radio = txtIdRadio.value;
    
    //Cambiamos el valor de string por int con parseInt()
    radioParseado = parseInt(radio);

    //Calculamos la circunferencia del círculo
    circunferencia = 2 * pi * radioParseado;

    //Calculamos la cantidad de alambre a comprar
    cantidadDeAlambre = circunferencia * alambre;

    //Mostrar resultado por mensaje
    alert("Se necesitan " + cantidadDeAlambre + " mts de alambre");

}
function Materiales () 
{
    //Declaración
    var ancho;
    var largo;
    var area;
    var alambre;
    var anchoParseado;
    var largoParseado;
    var bolsasDeCemento;
    var bolsasDeCal;
    var cantidadDeCemento;
    var cantidadDeCal;

    //Asignación de cantidad de alambre , bolsas de cemento y cal
    alambre = 3;
    bolsasDeCemento = 2;
    bolsasDeCal = 3;

    //Asignación mediante ID
    ancho = txtIdAncho.value;
    largo = txtIdLargo.value;

    //Cambiamos el valor de string por int con parseInt()
    anchoParseado = parseInt(ancho);
    largoParseado = parseInt(largo);

    //Calcular el area de la superficie
    area = ancho * largo;

    //Calcular la cantidad de material necesario
    cantidadDeCemento = area * bolsasDeCemento;
    cantidadDeCal = area * bolsasDeCal;

    //Mostrar el resultado por pantalla
    alert("Se necesitan " + cantidadDeCemento + " bolsas de cemento y " + cantidadDeCal + " bolsas de cal");

}