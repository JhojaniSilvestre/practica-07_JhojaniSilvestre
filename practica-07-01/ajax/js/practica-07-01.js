$(window).on("load",inicio);
	
function inicio(){
	$("#buscar").on("click",proceso);
}

function proceso(){
    //obtengo un conjunto con los option seleccionados
    let option = $("#autores>option:selected");

	if ($(option).length > 0) {
        //obtengo el valor de la posicion 0, que es el seleccionado
        let vautor = $(option).eq(0).val();
		console.log(vautor);
		// solicitud a un programa php con paso de parámetros en variable
		// mediante Ajax
        $.ajax("php/practica-07-01.php",{
                method:"GET",
				data:{autor:vautor},
				success:muestra});
    }
    else{
        alert("Debe seleccionar un autor");
    }
}

function muestra(valor){
	$("#principal").val(valor);
}

