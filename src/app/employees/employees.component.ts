import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { Root } from '../User.model';
import jwt_decode, { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  users: Root[] = [];
  decodedToken: any;
  user: any;
  userRole: any;
  userId: any;


  newUser = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    profession: null,
  }




  

  constructor(private masterService:MasterService){}

  ngOnInit(){
    return this.masterService.getUser().subscribe((data)=>{
      this.users = data;

      


      const token = localStorage.getItem('jwt');
      if(token){
        this.decodedToken = jwtDecode(token);
        this.user = this.users.find(x=> x.email === this.decodedToken.sub)
        this.userRole =  this.user.role;
        this.userId = this.user.id;

         if(this.user){
           localStorage.setItem('loggedInUser', this.user?.username);
         }
      }
      
    })
  }

  deleteUser(id:string){
   return this.masterService.deleteUser(id).subscribe((response)=>{
     window.location.reload();  
   })
  }





}
