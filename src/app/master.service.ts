import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Root } from './User.model';
import {catchError, switchMap, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl = "https://emsbackend-h3xs.onrender.com";
  token = localStorage.getItem('jwt');

  constructor(private http:HttpClient) { }


  getUser():Observable<Root[]>{
    return this.http.get<Root[]>(`${this.baseUrl}/user`).pipe(
      catchError(this.handleError)
    );
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

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';
  if (error.status === 401) {
    errorMessage = 'You are not authorized to access this resource. Please log in.';
  } else if (error.status === 403) {
    errorMessage = 'You do not have permission to perform this action.';
  } else if (error.status === 404) {
    errorMessage = 'The requested resource was not found.';
  }

  return throwError(() => errorMessage);
}

}


  
 
