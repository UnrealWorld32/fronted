//var factorial = (numero) => {
    //(!numero) ? console.warn("No ingresaste un numero") :
    //(NaN(numero)) ? console.log(`El valor ${numero} NO es válido`) :
    //(numero === 0) ? console.log("El número no puede ser 0") :
    //console.log("'Ta bien");
//}

function factorial (numero){
    if(numero === undefined){
        console.warn("No ingresaste un numero");
    }else if(typeof numero != "number"){
        console.error(`El valor ${numero} NO es válido`);
    }else if(numero===0){
        console.error("El numero no puede ser 0");
    }else if(Math.sign(numero) === -1){
        console.error("El numero no puede ser negativo");
    }else {
        let factorial = 1;
        for(let i = numero; i > 1; i--){
            factorial *= i;
        }
        console.info("El factorial del numero ", numero, "es ", factorial);
    }
}

//function diferente(numero){
    //switch(numero){
        //case undefined:
            //console.warn("No ingresaste un numero");
            //break;
        //case typeof numero != "number":
            //console.error(`El valor ${numero} NO es válido`);
            //break;
    //}
//}