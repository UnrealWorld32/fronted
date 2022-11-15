const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

var descripcion = $('#descripcion');
var calorias = $('#calorias');
var carbohidratos = $('#carbohidratos');
var proteina = $('#proteina');
var elementos = [];

//descripcion.keyPress(() => {
//descripcion.removeClass('is-invalid')
//})

function validarInput() {
    descripcion.val() ? '' : descripcion.addClass('is-invalid');
    calorias.val() ? '' : calorias.addClass('is-invalid');
    carbohidratos.val() ? '' : carbohidratos.addClass('is-invalid');
    proteina.val() ? '' : proteina.addClass('is-invalid');

    (descripcion.val() && calorias.val()
        && carbohidratos.val() && proteina.val()) ? agregar() : '';
}

function agregar() {
    const nuevoElemento = {
        descripcion: descripcion.val(),
        calorias: calorias.val(),
        carbohidratos: carbohidratos.val(),
        proteina: proteina.val()
    }
    elementos.push(nuevoElemento);
    limpiarImputs();
    console.log(elementos);
}

function limpiarImputs() {
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
}

function atrsToCadena(obj = {}) {
    Object.keys(obj)
        .map(attr => `${attr}="${obj[attr]}"`)
        .join('');
}

const atrsTag = obj => (contenido = '') =>
    `<${obj.tag}${obj.attrs ? ' ' : ''}${atrsToCadena(obj.attrs)}>${contenido}</${obj.tag}>`;

const tag = t => typeof t === 'string' ? atrsTag({ tag: t }) : atrsTag(t);

const filaTablaTag = tag('tr');
const filaTabla = elementos => compose(filaTablaTag, celdasTabla)(elementos);

const celdaTabla = tag('td');
const celdasTabla = elementos => elementos.map(celdaTabla).join('');
const trashIcon = tag({ tag: 'i', attrs: { class: 'fa fa-trash-alt' } })('');