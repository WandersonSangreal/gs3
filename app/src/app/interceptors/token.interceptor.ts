import {HttpInterceptorFn} from '@angular/common/http';
import {from, switchMap} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  return from(authService.getToken()).pipe(
    switchMap(token => {
      if (token) {
        req = req.clone({
          setHeaders: {Authorization: `Bearer ${token}`, "Content-Type": "application/json"},
        });
      }
      return next(req);
    })
  );

};
