import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    public token: string = '';
    constructor(private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = request;
        this.token = window.sessionStorage.getItem('access_token');
        if(this.token !== null) {
            authRequest = request.clone({headers: request.headers.set('Authorization', `Bearer ${this.token}`)});
        }
        return next.handle(authRequest).pipe(
            tap((error: any) => {
                   if(error instanceof HttpErrorResponse) {
                       if(error.status === 401) {
                           this.router.navigate([`/login`]);
                       }
                   }
            }));
    }
    
}