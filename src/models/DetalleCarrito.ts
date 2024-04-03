import { Producto } from './Producto';

export class DetalleCarrito {

    id?: number | undefined;
    cantidad: number;
    producto: Producto;

    constructor(id: number | undefined, cantidad: number, producto: Producto) {
        this.id = id;
        this.cantidad = cantidad;
        this.producto = producto;
    }
}


