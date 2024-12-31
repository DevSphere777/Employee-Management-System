import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
import { Root } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  users: Root[] = [];

  constructor(private fb: FormBuilder, private authService: MasterService, private route: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(){
    return this.authService.getUser().subscribe((data)=>{
      this.users = data;
      })
    
  }

  login() {
    const user = this.users.find(
      x => x.email === this.loginForm.controls['email'].value &&
           x.password === this.loginForm.controls['password'].value
    );
  
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
  
      if (user.role === 'ADMIN') {
        this.route.navigateByUrl('/admin');
      } else {
        this.route.navigateByUrl('/main');
      }
    } else {
      console.error('Invalid credentials');
    }
  }

}
