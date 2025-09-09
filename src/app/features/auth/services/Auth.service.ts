import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ILoginRequest, ILoginResponse, IResponse, IUser } from '../../../interfaces/IUser.interface';
import { environment } from '../../../../environments/environments';
import { catchError, Observable, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.apiUrl;

  constructor(private readonly _http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object

  ) {}



  isLoggedIn(): boolean{
    if(isPlatformBrowser(this.platformId)){

    const token = localStorage.getItem('auth_token')


return !!token
    }
   return false;
  }


  registerUser(user: IUser): Observable<IResponse<IUser>> {
    return this._http.post<IResponse<IUser>>(`${this.url}/user/register`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  login(credentials: ILoginRequest):Observable<IResponse<ILoginResponse>>{
    return this._http
      .post<IResponse<ILoginResponse>>(`${this.url}/auth/login`, credentials)
      .pipe(catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      }))
  }


  //  private handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Ha ocurrido un error inesperado';

  //   if (error.error instanceof ErrorEvent) {
  //     // Error del cliente
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Error del servidor
  //     errorMessage = error.error?.message || `Código: ${error.status}`;
  //   }

  //   return throwError(() => new Error(errorMessage));
  // }



}
