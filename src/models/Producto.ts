export class Producto{
    public id:number
    public name:string
    public stock:number
    public price:number
    public description:string
    public image?:string

  
    constructor(id: number, nombre: string, price: number,stock:number, description: string,image:string) {
        this.id = id;
        this.name = nombre;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.image = image;
      }

    }