var _privado = new WeakMap();

class Libro {
    constructor(precio, titulo, autor) {
        const propiedades = {
            _precio: precio,
            _titulo: titulo,
            _autor: autor
        }
        _privado.set(this, { propiedades });
    }

    get titulo() {
        return _privado.get(this).propiedades['_titulo'];
    }
    set titulo(newTitulo) {
        return _privado.get(this).propiedades['_titulo'] = newTitulo;
    }

    get autor() {
        return _privado.get(this).propiedades['_autor'];
    }
    set autor(newAutor) {
        return _privado.get(this).propiedades['_autor'] = newAutor;
    }

    get precio() {
        return _privado.get(this).propiedades['_precio'];
    }

    obtenerTodosLosDatos() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`);
    }
}

var libro1 = new Libro(1000000, 'El Fin de la Eternidad', 'Isaac Asimov');

class Comic extends Libro {
    constructor(precio, titulo, autor, ilustradores) {
        super(precio, titulo, autor);
        this.ilustradores = ilustradores;
    }

    agregarIlustrador(newIlustrador) {
        this.ilustradores.push(newIlustrador);
    }

    obtenerTodosLosDatos() {
        super.obtenerTodosLosDatos();
        console.log(`Ilustradores: ${this.ilustradores}`);
    }
}

var comic1 = new Comic(1000000, "Spiderman", "Stan Lee", ["Steve Ditko", "Jack Kirby"]);

class CarritoCompras {
    constructor() {
        this.producto = [];
    }
    agregarProducto(cantidad, precio) {
        this.producto.push(...Array(cantidad).fill(precio));
    }

    mostrarProductos() {
        console.log(this.productos);
    }

    calculoTotal = () => {
        return this.producto
            .map(precio => precio)
            .reduce((ac, precio) => ac + precio, 0);
    }

    imprimirTicket() {
        console.log(`Total a pagar: ${this.calculoTotal()}`)
    }
}

const carrito = new CarritoCompras();

carrito.agregarProducto(2, libro1.precio);
carrito.agregarProducto(3, comic1.precio);

carrito.mostrarProductos();
carrito.imprimirTicket();

libro1.obtenerTodosLosDatos();
comic1.obtenerTodosLosDatos();