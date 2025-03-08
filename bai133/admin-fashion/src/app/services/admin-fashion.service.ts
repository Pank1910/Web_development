import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../interfaces/Fashion';

@Injectable({
  providedIn: 'root'
})
export class AdminFashionService {
  private apiUrl = 'http://localhost:4000'; // Thêm URL cơ sở của API

  constructor(private _http: HttpClient) { }

  // get all fashion
  getFashions(): Observable<any> {
    return this._http.get<Fashion[]>(`${this.apiUrl}/api/fashions`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // get fashion by id
  getFashion(fashionId: string): Observable<any> {
    return this._http.get<Fashion>(`${this.apiUrl}/api/fashions/${fashionId}`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // post new fashion
  postFashion(fashion: Fashion): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<Fashion>(`${this.apiUrl}/api/fashions`, fashion, { headers }).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // put fashion
  putFashion(afashion: Fashion): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put<Fashion>(`${this.apiUrl}/api/fashions`, afashion, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // delete fashion
  deleteFashion(fashionId: string): Observable<any> {
    return this._http.delete<any>(`${this.apiUrl}/api/fashions/${fashionId}`).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}