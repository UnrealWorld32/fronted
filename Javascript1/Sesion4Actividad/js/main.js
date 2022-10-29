const juego = {
    opciones: ["✂️", "🖐", "🤜"],
    nombreJugadores: { jugador1: "J1", jugador2: "CPU" },
    scores: { jugador1: 0, jugador2: 0 }
}

var pedirNuevoNombre = () => { return window.prompt("¿Cómo te llamas?", "J1"); }

var cambiarNombre = (nuevoNombre) => {
    if (/^[a-zA-Z]+/.test(nuevoNombre)) {
        juego.nombreJugadores.jugador1 = nuevoNombre;
        console.log("Bienvenido " + nuevoNombre + "🙋‍♂!")
    } else {
        console.log("Mejor te llamare " + juego.nombreJugadores.jugador1);
    }
}

function aleatorio() {
    var seleccion = Math.floor(Math.random() * 3);
    return seleccion.toString();
}

var imprimirManoAleatoria = () => {
    return juego.opciones[aleatorio()];
}

var imprimirResultado = () => {
    (juego.scores.jugador2 > juego.scores.jugador1) ? console.log("¡Fin del juego!\n" + juego.nombreJugadores.jugador2 + " GANA\nGAME OVER") :
        console.log("¡Fin del juego!\n" + juego.nombreJugadores.jugador1 + " GANA\n¡FELICIDADES!")
}

var resultado = (gana) => {
    (gana === 0) ? console.log("*" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.jugador1 + "]" + juego.nombreJugadores.jugador2 + " :[" + juego.scores.jugador2 + "]*") :
        (gana === 1) ? console.log("*" + juego.nombreJugadores.jugador1 + " :[" + juego.scores.jugador1 + "]" + juego.nombreJugadores.jugador2 + " :[" + juego.scores.jugador2 + "]") :
            console.log(juego.nombreJugadores.jugador1 + " :[" + juego.scores.jugador1 + "]" + juego.nombreJugadores.jugador2 + " :[" + juego.scores.jugador2 + "]*");
}

var evalua = (mano1, mano2) => {
    var victoria = 0;
    if (mano1 === mano2) {
        console.log(juego.opciones[mano1] + "VS" + juego.opciones[mano2] + "\nempate");
        victoria = 0;
    } else if ((mano1 === juego.opciones[0] && mano2 === juego.opciones[1]) ||
        (mano1 === juego.opciones[1] && mano2 === juego.opciones[2]) ||
        (mano1 === juego.opciones[2] && mano2 === juego.opciones[0])) {
        console.log(juego.opciones[mano1] + " vence a " + juego.opciones[mano2] + ", " + juego.nombreJugadores.jugador1 + " GANA");
        juego.scores.jugador1++;
        victoria = 1;
    } else {
        console.log(juego.opciones[mano2] + " vence a " + juego.opciones[mano1] + ", " + juego.nombreJugadores.jugador2 + " GANA");
        juego.scores.jugador2++;
        victoria = 2;
    }
    resultado(victoria);
    /*(mano1 === mano2) ? console.log(juego.opciones[mano1] + "VS" + juego.opciones[mano2] + "\nempate");
    victoria = 0 :
    ((mano1 === juego.opciones[0] && mano2 === juego.opciones[1]) ||
        (mano1 === juego.opciones[1] && mano2 === juego.opciones[2]) ||
        (mano1 === juego.opciones[2] && mano2 === juego.opciones[0])) ? console.log(juego.opciones[mano1] + " vence a " + juego.opciones[mano2] + ", " + juego.nombreJugadores.jugador1 + " GANA");
        juego.scores.jugador1++;
        victoria = 1 :
        console.log(juego.opciones[mano2] + " vence a " + juego.opciones[mano1] + ", " + juego.nombreJugadores.jugador2 + " GANA");
        juego.scores.jugador2++;
        victoria = 2;*/
}

var main = () =>{
    while(juego.scores.jugador1 == 3 || juego.scores.jugador2 != 3){
        var j1mano = imprimirManoAleatoria();
        var j2mano = imprimirManoAleatoria();
        evalua(j1mano, j2mano);
        console.log(juego.nombreJugadores.jugador1+" "+j1mano);
        console.log(juego.nombreJugadores.jugador2+" "+j2mano);
        if(juego.scores.jugador1==3){
            imprimirResultado();
            break
        }
    }
}

cambiarNombre(pedirNuevoNombre());
console.log("¡QUE COMIENCE EL JUEGO!");
main();