import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Carrito } from '../../models/Carrito';
import { ProductoService } from './producto.service';
import { DetalleCarrito } from '../../models/DetalleCarrito';
import { Producto } from '../../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoURL = environment.apiUrl + '/carrito';
  
  constructor(
    private http: HttpClient,
    private productoService: ProductoService) { }

  carrito: Carrito = new Carrito();
  carritoId: number = 21;

  ngOnInit(): void {
    //Mock carrito
    this.carrito.id = 21;

    this.obtenerCarritoPorId(this.carrito.id).subscribe((data: Carrito) => {
      this.carrito = data;
      console.log("Carrito de BBDD", data)
    }).closed;
  }

  obtenerCarritoPorId(id: number): Observable<Carrito> {
    console.log("Get Carrito",this.carritoURL + '/' + id)
    return this.http.get<any>(this.carritoURL + '/' + id);
  }

  actualizarCarrito(carrito: any, id: number): Observable<Carrito> {
    console.log("Patch Carrito",this.carritoURL + '/' + id,carrito)
    return this.http.patch<any>(this.carritoURL + '/' + id,carrito);
  }

  // async agregarProductoAlCarrito(idProducto: number) {

  //   const obtenerCarritoPorId = this.obtenerCarritoPorId(this.carritoId).pipe(map((data: Carrito) => {
  //     this.carrito = data;
  //     return data
  //   }))

  //   const agregarProducto = this.productoService.obtenerProductoPorId(idProducto).pipe(map((producto: Producto) => {
  //     let detalleCarrito = new DetalleCarrito(0, 1, producto);
  //     this.carrito.detalleCarrito.push(detalleCarrito);
  //     return producto
  //   }))

  //   const actualizarCarrito = this.actualizarCarrito(this.carrito, this.carritoId).pipe(map((data: Carrito) => {
  //     this.carrito = data;
  //     return data
  //   }))

  //   agregarProducto.pipe(
  //     concatMap(() => actualizarCarrito),
  //   ).subscribe((data) => { 
  //     console.log("Producto agregado al carrito",data)
  //   });

  // }

  async agregarProductoAlCarrito(idProducto: number) {

    const agregarProducto = this.productoService.obtenerProductoPorId(idProducto).pipe(map((producto: Producto) => {
      let nuevoDetalle = new DetalleCarrito(0, 1, producto);
      this.carrito.detalleCarrito.push(nuevoDetalle);
      return producto
    }))

    const obtenerCarritoPorId = this.obtenerCarritoPorId(this.carritoId).pipe(map((data: Carrito) => {
      this.carrito = data;
      return data
    }))

    obtenerCarritoPorId.pipe(
      concatMap(() => agregarProducto),
      concatMap(() => this.actualizarCarrito(this.carrito, this.carritoId))
    ).subscribe((data) => {});

  }

}
