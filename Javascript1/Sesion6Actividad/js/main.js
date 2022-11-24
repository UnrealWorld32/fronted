const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

//console.log("¡BANGA!");

var atrsToCadena = (obj = {}) => Object.keys(obj).map(attr => `${attr}="${obj[attr]}`).join('');

var atrsTag = obj => (contenido = '') =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${atrsToCadena(obj.attrs)}>${contenido}</${obj.tag}>`;

var tag = t => typeof t === 'string' ? atrsTag({ tag: t }) : atrsTag(t);

var filaTablaTag = tag('tr');
var filaTabla = elementos => compose(filaTablaTag, celdasTabla)(elementos);

var celdaTabla = tag('td');
var celdasTabla = elementos => elementos.map(celdaTabla).join('');
var trashIcon = tag({ tag: 'i', attrs: { class: 'fa fa-trash-alt' } })('');


//  Toma de datos desde el HTML según el ID
var descripcion = $('#descripcion');
var calorias = $('#calorias');
var carbohidratos = $('#carbohidratos');
var proteina = $('#proteina');

var lista = [];

//  Elimina la advertencia de que la forma está vacia al escribir algo
descripcion.keydown(() => { descripcion.removeClass('is-invalid'); })
calorias.keydown(() => { calorias.removeClass('is-invalid'); })
carbohidratos.keydown(() => { carbohidratos.removeClass('is-invalid'); })
proteina.keydown(() => { proteina.removeClass('is-invalid'); })

//  Advierte cuando un dato de la forma está vacia
var validarInput = () => {
    descripcion.val() ? '' : $(descripcion).addClass("is-invalid");
    calorias.val() ? '' : $(calorias).addClass("is-invalid");
    carbohidratos.val() ? '' : $(carbohidratos).addClass("is-invalid");
    proteina.val() ? '' : $(proteina).addClass("is-invalid");
    (descripcion.val() && calorias.val() && carbohidratos.val() && proteina.val()) ?
        agregar() : '';
}

//  Agrega elemento a la lista
var agregar = () => {
    const newElem = {
        descripcion: descripcion.val(),
        calorias: parseInt(calorias.val()),
        carbohidratos: parseInt(carbohidratos.val()),
        proteina: parseInt(proteina.val())
    }
    lista.push(newElem);
    actualizarTotales();
    renderElementos();
    limpiarInputs();
    //console.log(lista);
}

//  Vuelve a contar los totales
var actualizarTotales = () => {
    let calorias = 0, carbohidratos = 0, proteina = 0;
    lista.map(elemento => {
        calorias += elemento.calorias,
            carbohidratos += elemento.carbohidratos,
            proteina += elemento.proteina
    })

    $('#totalCalorias').text(calorias);
    $('#totalCarbohidratos').text(carbohidratos);
    $('#totalProteina').text(proteina);
}

// Cambia los valores de la forma para que quede en blanco
var limpiarInputs = () => {
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
}

var renderElementos = () => {
    $('tbody').empty();

    lista.map((elemento, indice) => {
        const botonEliminar = tag({
            tag: 'button',
            attrs: {
                class: 'btn btn-outline-danger',
                onclick: `eliminarElemento(${indice})`
            }
        })(trashIcon)
        $('tbody').append(filaTabla([elemento.descripcion, elemento.calorias, elemento.carbohidratos, elemento.proteina, botonEliminar]));
        console.log(filaTabla([elemento.descripcion, elemento.calorias, elemento.carbohidratos, elemento.proteina, botonEliminar]));
    })
}