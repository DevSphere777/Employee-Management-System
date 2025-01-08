import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Root } from './User.model';
import {switchMap, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = "https://emsbackend-h3xs.onrender.com";
  token = localStorage.getItem('jwt');

  constructor(private http:HttpClient) { }


  getUser():Observable<Root[]>{
    return this.http.get<Root[]>(`${this.baseUrl}/user`);
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

  updateUser(userId: string, updatedUser: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/${userId}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${this.token}`,  
      },
      responseType: 'text',
    });
  }
  

 getUserById(id:string):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/user/${id}`)
 }
 


postAssignment(data:any):Observable<any>{
  return this.http.post(`${this.baseUrl}/assignment`, data, {
    headers: { 'Content-Type': 'application/json' },
    responseType: 'text'  
  })
}

getAssignments():Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/assignment`, {
  })
}

updateAssignment(id:string, data:any):Observable<any>{
  return this.http.put(`${this.baseUrl}/assignment/${id}`, data,{
    headers: { 'Content-Type': 'application/json',  },
    responseType: 'text',
  })
}

}


  
 
