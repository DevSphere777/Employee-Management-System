import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MasterService } from '../master.service';
// import { Root } from '../User.model';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  users: [] = [];

  newUser = {
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    password:'',
    profession:null
   };





  constructor(private backEnd:MasterService, private routes: Router){


  }

  passwordsMatch(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
        const password = group.get('password')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordsMismatch: true };
    };
}




addUser(): void {
  this.backEnd.postUser(this.newUser).subscribe({
    next: (data) => {
      console.log('User added successfully', data);
      this.routes.navigateByUrl('/login')
    },
    error: (err) => {
      console.error('Error adding user', err);
    }
  });
}




  
}
