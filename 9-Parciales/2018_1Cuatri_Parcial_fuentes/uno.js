
function mostrar()
{
    //Declaración de variables
    var ancho;
    var largo;
    var perimetro;

    //Asignación mediante prompt()
    ancho = prompt("Ingrese el ancho");
    largo = prompt("Ingrese el largo");

    //Calcular perímetro
    perimetro = (2*ancho) + (2*largo);
    
    //Mostrar perímetro
    alert("El perímetro es "+ perimetro);


}
