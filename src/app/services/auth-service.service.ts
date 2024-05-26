import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http : HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/register", user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/login", user);
  }

  fetchUserRoles(token: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/userRole/${token}`);
  }

  logout() {
    // Clear user authentication data from local storage or cookies
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    const token = localStorage.getItem('token');
    return token !== null && token !== '';
  }

  
  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    } else {
      console.error('localStorage is not available');
      return null;
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

}
