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
  tasks: any[] = [];
 
  newUser = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    profession: null,
  }

  newAssignment = {
    title: '',
    description: '',
    users: []
  };
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
      
      return this.masterService.getAssignments().subscribe(data=>{
        this.tasks = data;
        console.log(this.tasks)
      })
    })
  }

  deleteUser(id:string){
   return this.masterService.deleteUser(id).subscribe((response)=>{
   })
  }

  editUserById(id: string){
      return this.masterService.updateUser(id, this.newUser).subscribe(response => {
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

addAssignment(){
  console.log(this.newAssignment)
  return this.masterService.postAssignment(this.newAssignment).subscribe((response)=>{
    console.log(response)
  })
}


assignUserToTask(task: any, user: any) {

  if (!task.users) {
    task.users = []; 
  }
  task.users.push(user); 


  this.masterService.updateAssignment(task.id, task).subscribe(response => {
    console.log('Task updated with user:', response);
  }, error => {
    console.error('Error updating task:', error);
  });
}

}
  
