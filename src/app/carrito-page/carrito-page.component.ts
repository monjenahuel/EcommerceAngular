import { Component } from '@angular/core';
import { Carrito } from '../../models/Carrito';
import { UserService } from '../services/user.service';
import { Producto } from '../../models/Producto';
import { DetalleCarrito } from '../../models/DetalleCarrito';
import { ProductoService } from '../services/producto.service';
import { CurrencyPipe } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Observable, concatMap, map } from 'rxjs';
import { CarritoService } from '../services/carrito.service';
import { User } from '../../models/User';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from '../shared/components/carrusel/carrusel.component';

@Component({
  selector: 'app-carrito-page',
  standalone: true,
  imports: [CurrencyPipe, NgFor,NgIf,RouterModule,CarruselComponent],
  templateUrl: './carrito-page.component.html',
  styleUrl: './carrito-page.component.css',
  providers: [ProductoService, UserService, CarritoService]
})
export class CarritoPageComponent {

  carrito: Carrito = new Carrito();

  constructor(
    private productoService: ProductoService,
    private userService: UserService,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    //Mock carrito
    this.carrito.id = 21;

    this.carritoService.obtenerCarritoPorId(this.carrito.id).subscribe((data: Carrito) => {
      this.carrito = data;
      console.log("Carrito de BBDD", data)
    }).closed;

    //Mock user
    this.userService.obtenerUsuario7().subscribe((data: User) => {
      this.carrito.user = data;
    })
  }
  //Fixme: Mandar al service
  async agregarProductoAlCarrito(idProducto: number) {

    const agregarProducto = this.productoService.obtenerProductoPorId(idProducto).pipe(map((data: Producto) => {
      let detalleCarrito = new DetalleCarrito(0, 1, data);
      this.carrito.detalleCarrito.push(detalleCarrito);
      return data
    }))

    agregarProducto.pipe().subscribe(async (data) => { 
      await this.refreshCarrito();
    });
    // this.carritoService.agregarProductoAlCarrito(idProducto)
  }

  async disminuirCantidad(idProducto: number) {
    let detalleCarrito = this.carrito.detalleCarrito.find(detalle => detalle.producto.id == idProducto);

    if (detalleCarrito && detalleCarrito.cantidad > 1) {
      detalleCarrito.cantidad--;
      await this.refreshCarrito();
    }


  }

  async aumentarCantidad(idProducto: number) {
    let detalleCarrito = this.carrito.detalleCarrito.find(detalle => detalle.producto.id == idProducto);
    if (detalleCarrito && detalleCarrito.cantidad < detalleCarrito.producto.stock) {
      detalleCarrito.cantidad++;
      await this.refreshCarrito();
    }
  }

  async refreshCarrito() {
    const actualizarCarrito = this.carritoService.actualizarCarrito(this.carrito, this.carrito.id).pipe(map((data: Carrito) => {
      this.carrito = data;
      return data
    }))


    const actualizarVistaCarrito = this.carritoService.obtenerCarritoPorId(this.carrito.id).pipe(map((data: Carrito) => {
      this.carrito = data;
      return data
    }))

      actualizarCarrito.pipe(
      concatMap(() => actualizarVistaCarrito),
    ).subscribe((data) => { });
  }

  //Fixme: Mandar al service
  async eliminarDelCarrito(idProducto: number){
    this.carrito.detalleCarrito = this.carrito.detalleCarrito.filter(detalle => detalle.producto.id != idProducto);
    await this.refreshCarrito();
  }

  //Fixme: Mandar al service
  carritoVacio(): boolean {
    return this.carrito.detalleCarrito.length == 0;
  }

}
