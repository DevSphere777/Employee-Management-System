import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import jwt_decode, { jwtDecode } from 'jwt-decode';

import { Root } from '../User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: Root[] = [];
  userData: string | null = null;
  decodedToken: any;
  user: any;
  userRole: any;
  assignment: any[] = [];
  usersTask: any[] = [];
  userAssignment: any;


  tasksInputs = {
    title: '',
    description:'',
  }
  
  constructor(private routes: Router, private masterService: MasterService) {}

  ngOnInit() {
    return this.masterService.getUser().subscribe((data)=>{
      this.users = data; 

   


      const token = localStorage.getItem('jwt');
      if (token) {
       this.decodedToken = jwtDecode(token);
       this.user = this.users.find(x=> x.email === this.decodedToken.sub)
       this.userRole =  this.user.role;
       this.userAssignment = this.user.assignments;
      console.log(this.userAssignment)
        if(this.user){
          localStorage.setItem('loggedInUser', this.user?.username);
          this.userData = localStorage.getItem('loggedInUser');
        }
      }

      return this.masterService.getAssignments().subscribe((data)=>{
        this.assignment = data;
        console.log(this.assignment)
      })
    
    })

    
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedInUser');
    this.routes.navigateByUrl('/login');
  }


  editProf(){
    const edit = document.querySelector('.modal') as HTMLElement;
    const ovrl = document.querySelector('.overlay') as HTMLElement;
    const body = document.querySelector('.assignmentContainer') as HTMLElement
    if (edit) {
      if (edit.style.display === 'none' || edit.style.display === '') {
        edit.style.display = 'block';
        ovrl.style.display = 'block';
        body.style.display = 'none';
      } else {
        ovrl.style.display = 'none';
        edit.style.display = 'none';
        body.style.display = 'flex';
      }
    
  }
}

deleteUser(id: any){
  return this.masterService.deleteUser(id).subscribe(response =>{
    console.log(response)
  })
}





}
