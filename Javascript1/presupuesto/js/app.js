var cargarApp = () => {
    cargarCabecero();
}

var cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
}

var totalIngresos = () => {
    var totalIngreso = 0;
    var ingresos = [
        Quincena = 9000,
        Venta = 400
    ];
    for (let ingresa of ingresos) {
        totalIngreso += ingresa;
    }
    return totalIngreso;
}

var totalEgresos = () => {
    var totalEgreso = 0;
    var egresos = [
        Renta = 900,
        Ropa = 400
    ];
    for (let egresa of egresos) {
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