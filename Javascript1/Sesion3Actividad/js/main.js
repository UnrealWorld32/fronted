//Versión mia
function contarCaracteres(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    }else{
        console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
    }
}

//Version mejorada
const contarCaracteres1 = (cadena="") => {
    (!cadena) ? console.warn("No ingresaste ninguna cadena") :
    console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
}

//Función anónima (que no se te olvide -_-)
var pelicula = function(movie){
    return `El nombre de la película es ${movie}`;
}

//var pelicula = (movie) => {
//    return `El nombre de la película es ${movie}`;
//}

function sumame (a, b){
    var suma = parseInt(a)+parseInt(b);
}

function sumame1(numero1, numero2, sumarYmostrar, sumarPorDos){
    let suma = numero1 + numero2;
    console.log(suma);
    sumarYmostrar(suma);
    sumarPorDos(suma*2);
}
sumame1(12, 43, function(resultado){
    console.log("La suma es: ", resultado);
}, function(resultado){
    console.log("La suma por dos es : ", resultado);
})