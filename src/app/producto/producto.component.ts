import { Component, Input } from '@angular/core';
import { Producto } from '../../models/Producto';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, CurrencyPipe, SlicePipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  standalone: true,
  imports: [HttpClientModule,DatePipe,CurrencyPipe,SlicePipe,NgIf],
  providers: [CarritoService]
})
export class ProductoComponent {
  
  @Input() producto: Producto | undefined;
  
 
  
  constructor(
    private carritoService: CarritoService
  ) {
  }

  agregarProductoAlCarrito(idProducto: number) {
    console.log("en Producto Component",idProducto)
    this.carritoService.agregarProductoAlCarrito(idProducto)
  }

}
