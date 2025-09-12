import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ILoginRequest, ILoginResponse, IResponse, IUser } from '../../../interfaces/IUser.interface';
import { environment } from '../../../../environments/environments';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { StorageService } from '../../../shared/services/storage.service';
import { StorageKeys } from '../../../interfaces/IFeedBack.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.apiUrl;

  constructor(
    private readonly _storage: StorageService,
    private readonly _http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object

  ) { }



  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {

      const token = this._storage.get<string>(StorageKeys.AUTH_TOKEN)


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

   login(credentials: ILoginRequest): Observable<IResponse<ILoginResponse>> {
    return this._http
      .post<IResponse<ILoginResponse>>(`${this.url}/auth/login`, credentials)
      .pipe(
        tap((res: IResponse<ILoginResponse>) => {
          if (res.data?.token) {
            this._storage.set(StorageKeys.AUTH_TOKEN, res.data.token);
          }
          if (res.data) {
            //cambiar aqui corregir por otro serviccio 
            this._storage.set(StorageKeys.ACCESS_USER, res.data);
          }
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }
  
  logOut(){
    this._storage.remove(StorageKeys.AUTH_TOKEN);
    this._storage.remove(StorageKeys.USER)
  }

getToken(): string | null {
    return this._storage.get<string>(StorageKeys.AUTH_TOKEN);
  }


   getUser<T = IUser>(): T | null {
    return this._storage.get<T>(StorageKeys.USER);
  }
}
