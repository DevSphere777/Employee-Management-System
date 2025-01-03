import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from './User.model';

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
    return this.http.post(`${this.baseUrl}/register`, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  
    });
  }

  login(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user, {
      headers: { 'Content-Type': 'application/json',  },
      responseType: 'text'
    })
  }


  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text'
    });
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  
    });
  }


  getElementById(id: string, data: any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }


}

  
 
