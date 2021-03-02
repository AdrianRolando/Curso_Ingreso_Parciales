/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	var nota;
	nota = Math.floor(Math.random() * 10) + 1;
	
	if(nota == 9 || nota == 10){
		alert("Te sacaste un " + nota + ", tu nota es EXCELENTE");
	}
	else if(nota >= 4){
		alert("Te sacaste un " + nota + ", APROBASTE");
	}
	else{
		alert("Te sacaste un "+ nota + ". Vamos, la próxima se puede");
    }
}