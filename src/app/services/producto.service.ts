import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productURL = 'http://localhost:3000' + '/product';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any[]> {
    console.log(this.productURL + '/all')
    return this.http.get<any[]>(this.productURL + '/all');
  }

}
