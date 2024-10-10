import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const req = request.clone({
            // headers: request.headers.set('ngrok-skip-browser-warning', 'esto es para que funcione ngrok')
            headers: request.headers.set(environment.header.name, environment.header.value)
        });
        return next.handle(req);
      }
        
    }
