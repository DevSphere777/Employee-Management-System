import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './User.model';
// import { Root } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = "https://emsbackend-h3xs.onrender.com/user";

  constructor(private http:HttpClient) { }

  getUser():Observable<Root[]>{
    return this.http.get<Root[]>(`${this.baseUrl}/all`);
  }
  postUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  
    });
  }


  
}
 
