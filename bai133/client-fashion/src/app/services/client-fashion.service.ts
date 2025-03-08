import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../interfaces/Fashion';

@Injectable({
  providedIn: 'root'
})
export class ClientFashionService {
  private apiUrl = 'http://localhost:4000'; // Thêm URL cơ sở của API

  constructor(private _http: HttpClient) { }

  // get all fashion
  getFashions(): Observable<any> {
    return this._http.get<Fashion[]>(`${this.apiUrl}/api/fashions`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  getFashion(fashionId: string): Observable<any> {
    return this._http.get<Fashion>(`${this.apiUrl}/api/fashions/${fashionId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  getFashionsByStyle(style: string): Observable<any> {
    return this._http.get<Fashion[]>(`${this.apiUrl}/api/fashions/style/${style}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}