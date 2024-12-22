import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  formGroup: FormGroup;


  constructor(private fb:FormBuilder){
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required,Validators.minLength(9)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])  
    },
    { validators: this.passwordsMatch() }
  )
  }

  passwordsMatch(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
        const password = group.get('password')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordsMismatch: true };
    };
}

  
}
