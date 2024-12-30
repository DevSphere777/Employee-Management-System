import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userData: any;

  constructor(private routes:Router){}

  ngOnInit(){
    const storedUser = localStorage.getItem('loggedInUser');
    
    if (storedUser) {
      this.userData = JSON.parse(storedUser);
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.routes.navigateByUrl('/login');
  }
}
