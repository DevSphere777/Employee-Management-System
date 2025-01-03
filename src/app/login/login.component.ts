import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MasterService } from '../master.service';
import { BehaviorSubject, find } from 'rxjs';
import { Root } from '../User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: Root[] = [];
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  loginForm = {
    email: '',
    password: '',
  };

  constructor(private masterService:MasterService) {}

  
  ngOnInit(){
    return this.masterService.getUser().subscribe((data)=>{
      console.log(data);
      this.user = data;
    })
  }

  


  onSubmit(){
    console.log(this.loginForm)
    return this.masterService.login(this.loginForm).subscribe(data=>{
      console.log(data);
      localStorage.setItem('jwt', data);
     
    }
  )


  }
 }
