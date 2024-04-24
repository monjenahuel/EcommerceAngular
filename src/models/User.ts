import { Carrito } from "./Carrito";

export class User{
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    carrito?: Carrito;

    constructor() {
        this.id = 1;
        this.username = "Marcelo";
        this.password = "1234";
        this.email = "xd";
    }

}

