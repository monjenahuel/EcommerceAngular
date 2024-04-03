import { User } from './User';
import { DetalleCarrito } from './DetalleCarrito';

export class Carrito {
    id: number = 0;
    priceTotal:number = 0
    user?: User | undefined;
    detalleCarrito: DetalleCarrito[] = []

    constructor() {
    }
}