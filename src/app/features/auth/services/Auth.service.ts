import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse, IUser } from '../../../interfaces/IUser.interface';
import { environment } from '../../../../environments/environments';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.apiUrl;

  constructor(private readonly _http: HttpClient) {}

  registerUser(user: IUser): Observable<IResponse<IUser>> {
    return this._http.post<IResponse<IUser>>(`${this.url}/user/register`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }



}
