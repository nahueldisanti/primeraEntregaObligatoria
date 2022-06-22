let nombre = prompt("Bienvenide a Punto de Observacion, tu recomendador de salidas. Cual es tu nombre?");
// let destino = prompt("Hola " +nombre+ ". Donde te gustaria viajar? (Elegir entre Cordoba y Mendoza)");

function traslado (kilometros, valor) {
    let valorKilometro = kilometros * valor;
    return valorKilometro;
}

function hospedaje (dias, valor) {
    let valorHospedaje = dias * valor;
    return valorHospedaje;
}

function costoViaje (valorHospedaje, valorKilometro) {
    costo = valorHospedaje + valorKilometro;
    alert ("El costo de tu viaje es de: "+ costo);
}

function destinoPosible (presupuesto, costoTotal) {
    if (presupesto>costoTotal) {
        alert("Tu viaje ha sido reservado");
    }
    else {
        alert("Dado tu presupuesto, quizas podes elegir otro destino o viajar menos dias.");
    }
}

function opcionesDestino() {
    let opciones = prompt("Un gusto saludarte, "+nombre+". Por favor, elegi alguno de los siguientes destinos.(ESC para salir)\n 1.Cordoba\n 2. Santa Fe\n 3.Chubut\n 4.Rio Negro");
    return opciones;
    
}

function calculadora() {
    let destinoSeleccionado=opcionesDestino();
    while (destinoSeleccionado !== "ESC") {
        if (destinoSeleccionado !=="") {
            let presupuesto = parseFloat(prompt("Hermoso destino. Para continuar, contanos tu presupuesto estimado."));
            let dias= parseFloat(prompt("Por ultimo: Cuantos dias te gustaria hospedarte?")); 

            destinoSeleccionado = parseInt(destinoSeleccionado);
        }
    }
}



