import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BaberServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http : HttpClient) { }

  getAllBarbers(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/allBarbers");
  }

}
