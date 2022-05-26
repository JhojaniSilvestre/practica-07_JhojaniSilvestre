$(window).on("load",inicio);
	
function inicio(){
	$("#solucionar").on("click",proceso);
}

function proceso(){
	let a=$("#a").val();
	let b=$("#b").val();
    let c=$("#c").val();
    //comprobamos que no estén vacios y sean valores numericos
    let valido1= solonumeros(a);
    let valido2= solonumeros(b);
    let valido3= solonumeros(c);
    //si alguno es false, muestro mensaje
    if (!valido1 || !valido2 || !valido3) {
        alert("introduzca los datos correctos");
    }
    else{
        //creo el objeto ecuacion de la cuarta forma
        var datos = new ecuacion(a,b,c);
        //convierto los datos a json
        let datosJSON=JSON.stringify(datos);

        let configura={
            url:"php/practica-07-05.php",
            method:"POST",
            headers:{"Content-Type":"application/json"},
            data:datosJSON,
            dataType: "text",
            success: procesar
        }
        $.ajax(configura);
    }
	
}

function procesar(dato){
	let misdatos=JSON.parse(dato);
    $("#sol1").val(misdatos.solucion1);
    $("#sol2").val(misdatos.solucion2);		
}

class ecuacion{
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
    }
}

function solonumeros(dato){
    let valido=true;
    if (dato == "") {
        valido = false;
    }
    else{
        let pos=0;
        while (valido && pos < dato.length) {
            if (dato.charAt(pos) < "0" || dato.charAt(pos) > "9") {
                valido=false;
            }
            pos++;
        }
    }
    return valido;
}



