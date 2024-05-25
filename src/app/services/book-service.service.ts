import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/book/';

  constructor(private http : HttpClient) { }

  book(bookObject: any): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the token from storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl+"clientBook", bookObject, {headers});
  }
}
