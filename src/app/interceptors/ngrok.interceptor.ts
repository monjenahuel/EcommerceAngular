import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ngrokInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const req = request.clone({
            headers: request.headers.set('ngrok-skip-browser-warning', 'esto es para que funcione ngrok')
        });
        return next.handle(req);
      }
        
    }
