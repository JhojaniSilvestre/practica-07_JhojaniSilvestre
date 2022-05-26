$(window).on("load",inicio);
	
function inicio(){
	$("#calculo").on("click",proceso);
}

function proceso(){
	let caras = $("#caras").val().trim();
	let vertices = $("#vertices").val().trim();
	console.log(caras+" "+vertices);
	let carasNumero = soloNumeros(caras);
	let verticeNumero = soloNumeros(vertices);

	if (carasNumero && verticeNumero) {	
		// solicitud a un programa php con paso de parámetros en variable
		// mediante Ajax
        $.ajax("php/practica-07-02.php",{
			method:"POST",
			data:{caras:caras,vertices:vertices},
			success:muestra});
	}
	else{
		alert("introduzca el numero de caras y vértices");
	}
	
}

function muestra(valor){
	$("#aristas").val(valor);
}

function soloNumeros(dato){
	let esnum= true;
    let pos = 0;
	if (dato == "") {
		esnum= false;
	}
	else{
		while (esnum && pos < dato.length) {
			if (dato.charAt(pos) < "0" || dato.charAt(pos) > "9") {
				esnum = false;
			}
			pos+=1;
		}
	}

    return esnum;
}
