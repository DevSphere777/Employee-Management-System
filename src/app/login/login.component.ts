import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: '',
  };

  

  constructor(private masterService:MasterService) {}

  onSubmit(){
    console.log(this.loginForm)
    return this.masterService.login(this.loginForm).subscribe(data=>{
      console.log(data);
      localStorage.setItem('jwt', data);
    }
  )


  }
  
    }
