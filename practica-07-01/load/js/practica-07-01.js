$(window).on("load",inicio);
	
function inicio(){
	$("#buscar").on("click",proceso);
}

function proceso(){
    //obtengo un conjunto con los option seleccionados
    let option = $("#autores>option:selected");

	if ($(option).length > 0) {
        //obtengo el valor de la posicion 0, que es el pais seleccionado
        let vautor = $(option).eq(0).val();
		console.log(vautor);
		// solicitud a un programa php con paso de parámetros en variable
		// mediante get
		//let configuracion={method:"GET"};
		$("#datos").load("php/practica-07-01.php?"+$.param({autor:vautor}), muestra);
        //si el resultado lo tuviera que mostrarse solo en un div, podria quitar la funcion muestra y
        //se imprimiria directamente sobre el div con id datos
    }
    else{
        alert("Debe seleccionar un autor");
    }
}
//si el resultado lo muestro en una caja de texto s
function muestra(valor){
	$("#principal").val(valor);
}

