import { Component } from '@angular/core';
import { Root } from '../User.model';
import { MasterService } from '../master.service';
import { data } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  users: Root[] = [];
  username: string | null = null;
  role: string | null = null;
  constructor(private masterService:MasterService, private routes:Router){}

  ngOnInit(){
    this.masterService.getUser().subscribe((data)=>{
      this.users = data;
    })

    const user = localStorage.getItem('loggedInUser');
  if (user) {
    const parsedUser = JSON.parse(user) as { username: string; role: string }; 
    this.username = parsedUser.username; 
    console.log('Username:', this.username);

    this.role = parsedUser.role; 
  } 


  }
  
  logout() {
    localStorage.removeItem('loggedInUser');
    this.routes.navigateByUrl('/login');
  }

}