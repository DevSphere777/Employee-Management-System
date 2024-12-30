import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Root } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = "https://emsbackend-h3xs.onrender.com/user";

  constructor(private http:HttpClient) { }

  getUser():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  postUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  // Adjusted from 'text' to 'json' if expecting JSON response
    });
  }
 
}
