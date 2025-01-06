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
    profession: null
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

        console.log(this.userRole)
         if(this.user){
           localStorage.setItem('loggedInUser', this.user?.username);
         }
      }
    })
  }

  deleteUser(id:string){
   return this.masterService.deleteUser(id).subscribe((response)=>{
    console.log(response)
   })
  }

  editUserById(id: string){
      return this.masterService.updateUser(id, this.newUser).subscribe(response => {
        console.log("response:", response)
      })
  }

  openModal(){
    const modal = document.querySelector('.modalUser') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

if (modal && overlay) {
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none'; 


    cards.forEach((card) => {
      card.style.display = 'block'; 
    });
  });
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    modal.style.display = 'block'; 
    overlay.style.display = 'block'; 

   
    cards.forEach((card) => {
      card.style.display = 'none'; 
    });
  });
});

}
}