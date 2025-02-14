import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Laravel API URL

  constructor(private http: HttpClient) {}

  postTestData(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  

  getTestData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/test`);
  }


}
