import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { BehaviorSubject, find } from 'rxjs';
import { Root } from '../User.model';
import { Router } from '@angular/router';

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

  constructor(private masterService:MasterService, private routes:Router) {}

  
  ngOnInit(){
    return this.masterService.getUser().subscribe((data)=>{
      this.user = data;
    })
  }

  


  onSubmit(){
    console.log(this.loginForm)
    return this.masterService.login(this.loginForm).subscribe(data=>{
      localStorage.setItem('jwt', data);
      this.routes.navigateByUrl('/main');  
    }
  )
  }
 }
