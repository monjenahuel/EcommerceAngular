import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  obtenerUsuario7(): Observable<any> {
    console.log(this.userURL + '/7')
    return this.http.get<any>(this.userURL + '/7');
  }
}
