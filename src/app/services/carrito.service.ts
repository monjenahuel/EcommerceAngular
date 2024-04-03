import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Carrito } from '../../models/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoURL = environment.apiUrl + '/carrito';
  
  constructor(private http: HttpClient) { }

  obtenerCarritoPorId(id: number): Observable<Carrito> {
    console.log("Get Carrito",this.carritoURL + '/' + id)
    return this.http.get<any>(this.carritoURL + '/' + id);
  }

  actualizarCarrito(carrito: any, id: number): Observable<Carrito> {
    console.log("Patch Carrito",this.carritoURL + '/' + id,carrito)
    return this.http.patch<any>(this.carritoURL + '/' + id,carrito);
  }
}
