import { Producto } from './Producto';

export class DetalleVenta {
    id: number
    producto: Producto;
    precioDeVenta: number;
    cantidad: number;

    constructor(id: number, producto: Producto, precioDeVenta: number, cantidad: number) {
        this.id = id;
        this.producto = producto;
        this.precioDeVenta = precioDeVenta;
        this.cantidad = cantidad;
    }
}