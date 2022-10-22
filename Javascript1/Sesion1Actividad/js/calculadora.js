do{
    var numero1 = window.prompt("Dime un número", 0);
}while(numero1 < 0 || isNaN(numero1))

do{
    var numero2 = window.prompt("Dime otro número", 0);
}while(numero2 < 0 || isNaN(numero2))

var resultado="La suma es: "+(parseInt(numero1)+parseInt(numero2))+"<br>"+
"La resta es: "+(numero1-numero2)+"<br>"+
"La multiplicación es: "+(numero1*numero2)+"<br>"+
"La división es: "+(numero1/numero2)+"<br>";
document.write(resultado);

window.alert("La suma es: "+(parseInt(numero1)+parseInt(numero2))+"\n"+
"La resta es: "+(numero1-numero2)+"\n"+
"La multiplicación es: "+(numero1*numero2)+"\n"+
"La división es: "+(numero1/numero2)+"\n");

console.log("La suma es: "+(parseInt(numero1)+parseInt(numero2))+"\n"+
"La resta es: "+(numero1-numero2)+"\n"+
"La multiplicación es: "+(numero1*numero2)+"\n"+
"La división es: "+(numero1/numero2)+"\n");
