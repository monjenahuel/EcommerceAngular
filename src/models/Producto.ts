export class Producto{
    public id:number
    public name:string
    public stock:number
    public actualPrice:number
    public description:string
    public image?:string
    public isInCart:boolean = false;

  
    constructor(id: number, nombre: string, actualPrice: number,stock:number, description: string,image:string) {
        this.id = id;
        this.name = nombre;
        this.actualPrice = actualPrice;
        this.stock = stock;
        this.description = description;
        this.image = image;
      }

    }