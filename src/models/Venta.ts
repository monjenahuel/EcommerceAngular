import { DetalleVenta } from "./DetalleVenta";
import { User } from "./User";

export class Venta {
    id: number;
    monto: number;
    metodoDePago: string;
    user: User;
    detalleVenta: DetalleVenta[];

    constructor(id: number, monto: number, metodoDePago: string, user: User, detalleVenta: DetalleVenta[]) {
        this.id = id;
        this.monto = monto;
        this.metodoDePago = metodoDePago;
        this.user = user;
        this.detalleVenta = detalleVenta;
    }
}