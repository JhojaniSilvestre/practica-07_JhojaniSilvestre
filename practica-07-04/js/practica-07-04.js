$(window).on("load",inicio);
	
function inicio(){
	$("#boton").on("click",proceso);
}

function proceso(){
    //obtengo un conjunto con los option seleccionados
    let paises = $("#paises>option:selected");
	//si no se ha seleccionado ningún país, saltará un msj de error
	if ($(paises).length < 0) {
		alert("Debe seleccionar un país o más");
    }
    else{
		let cadenaxml;
		let empiezo="<paises><pais>";
		let final="</pais></paises>";
		//defino la primera posicion
		let medio="<nombre>"+$(paises).eq(0).val()+"</nombre>";
		//en caso de que haya más de 1 se concatenarán
		for (let index = 1; index < $(paises).length; index++) {
			medio+="<nombre>"+$(paises).eq(index).val()+"</nombre>";
		}
		//una vez tengamos todos los paises seleccionados
		//concateno todo
		
		cadenaxml=empiezo+medio+final;
		//console.log(cadenaxml);
		let config={
			method:"POST",
			headers:{"Content-Type":"application/x-www-form-urlencoded"},
			data:cadenaxml,
			dataType: "xml",
			success: procesar
		}
		// solicitud a un programa php con paso de parámetros en variable
		// mediante Ajax
        $.ajax("php/practica-07-04.php",config);    
    }
	
}

function procesar(misdatos){			
				/*-------------------Borrar nodos option------------------------------*/
				    //comprueba que mientras existe al menos un nodo hijo
					$("#region").empty();
				/*--------------------------------------------------*/
				let anyadido = false;
				let options;
				let region;
				let pos = 0;
				//recorro todos los nodos region obtenidos de la respuesta xml
				
				for (let i = 0; i < $(misdatos).find("region").length; i++) {
					//obtengo los nodos option de la select
					options = $("#region>option");
					//obtengo el nombre de la region del xml en la posicion i
					region = $(misdatos).find("region").eq(i).text();
					pos = 0;
					while (!anyadido && pos < $(options).length) {
						//orden descendente
						if (region < $(options).eq(pos).text()) {
							anyadido = true;
							$("#region>option").eq(pos).before("<option>"+region+"</option>");
						}
						pos++;
					}
					if (!anyadido) {
						$("#region").append("<option>"+region+"</option>");						
					}
					anyadido = false;
				}	
		
}
