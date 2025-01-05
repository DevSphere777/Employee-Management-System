import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Root } from './User.model';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = "https://emsbackend-h3xs.onrender.com";



  constructor(private http:HttpClient) { }

  getUser():Observable<Root[]>{
    return this.http.get<Root[]>(`${this.baseUrl}/user/all`);
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
      responseType: 'text',
    }
  )
  }


  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`, {
      responseType: 'text'
    });
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/${id}`, data, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  
    });
  }

  
  getUserAssignments(id: string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/user/${id}/assignment`)
}
}


  
 
