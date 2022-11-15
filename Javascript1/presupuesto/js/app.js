var ingresos = [
    Salario = 20000,
    VentaAuto = 50000
]
var egresos = [
    Renta = 4000,
    Ropa = 800
]

var cargarApp = () => {
    cargarCabecero();
}

var cargarCabecero = () => {
    var presupuesto = totalIngresos(ingresos) - totalEgresos(egresos);
    var porcentajeEgreso = totalEgresos(egresos) / totalIngresos(ingresos);
    $('#presupuesto').text(formatoMoneda(presupuesto));
    $('#ingresos').text(formatoMoneda(totalIngresos(ingresos)));
    $('#egresos').text(formatoMoneda(totalEgresos(egresos)));
    $('#porcentaje').text(formatoPorcentaje(porcentajeEgreso));
}

var totalIngresos = (ingresados) => {
    var totalIngreso = 0;
    for (let ingresa of ingresados) {
        totalIngreso += parseInt(ingresa);
    }
    return totalIngreso;
}

var totalEgresos = (egresados) => {
    var totalEgreso = 0;
    for (let egresa of egresados) {
        totalEgreso += egresa;
    }
    return totalEgreso;
}

var formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
}

var formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
}


//  Toma de riesgos
var atrsToCadena = (obj = {}) =>
    Object.keys(obj)
        .map(attr => `${attr}="${obj[attr]}"`)
        .join('');

const atrsTag = obj => (contenido = '') =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${atrsToCadena(obj.attrs)}>${contenido}</${obj.tag}`;

const tag = t => typeof t === 'string' ? atrsTag({ tag: t }) : atrsTag(t);

$('#lista-ingresos').append(tag('div'));
console.log(tag('div'));