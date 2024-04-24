import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import { Producto } from '../../models/Producto';
import { ProductoComponent } from '../producto/producto.component';
import { ProductoService } from '../services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../models/User';
import { UserService } from '../services/user.service';
import { CarritoService } from '../services/carrito.service';
import { Carrito } from '../../models/Carrito';
import { concatMap, map, mergeMap } from 'rxjs';


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule,RouterLink,MatToolbarModule,MatIcon,MatToolbarRow,ProductoComponent,HttpClientModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  providers: [ProductoService,UserService,CarritoService]
})

export class MainMenuComponent {

  constructor(
    private productoService: ProductoService,
    private userService: UserService,
    private carritoService: CarritoService) { }

    productList: Producto[] = [];
    userLogin: User = new User();
    carrito : Carrito = new Carrito();

    ngOnInit() {

      //Primero obtiene el usuario 7, con el usuario 7 obtiene el carrito y con el carrito marca los productos

      // this.userService.obtenerUsuario7().pipe(
      //   concatMap((user:User) => this.carritoService.obtenerCarritoPorId(user.carrito!.id)),
      //   concatMap((carrito:Carrito) => this.productoService.obtenerProductos())
      // ).pipe()//Acá quiero hacer un map para marcar los productos que estén en el carrito
      // .subscribe((productos) => {
      //   this.productList = productos;
      // });

      this.userService.obtenerUsuario7().pipe(
        concatMap((user: User) => this.carritoService.obtenerCarritoPorId(user.carrito!.id)),
        concatMap((carrito: Carrito) => {
          this.carrito = carrito;
          return this.productoService.obtenerProductos()
        }),
        map((productos: Producto[]) => {
          // Marcar productos en el carrito
          const productosMarcados = productos.map((producto: Producto) => {
            const productoEnCarrito = this.carrito.detalleCarrito.find((detalleCarrito) => detalleCarrito.producto.id === producto.id);
            producto.isInCart = productoEnCarrito !== undefined;
            return producto;
          });
          return productosMarcados;
        })
      ).subscribe((productosMarcados) => {
        this.productList = productosMarcados;
      });

    }

}
