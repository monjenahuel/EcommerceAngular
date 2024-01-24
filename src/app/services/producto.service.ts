import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productURL = environment.apiUrl + '/product';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any[]> {
    console.log(this.productURL + '/all')
    return this.http.get<any[]>(this.productURL + '/all');
  }

}
