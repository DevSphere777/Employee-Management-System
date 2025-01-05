// modal.component.ts
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { Root } from '../User.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  userId: string = '';
  users: Root[] =[];
  newUser = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    profession: null
  };

  constructor(
    private route: ActivatedRoute,  
    private masterService: MasterService  
  ) { }

  ngOnInit()  {
    return this.masterService.getUser().subscribe((data)=>{
      this.users = data; 

      const token = localStorage.getItem('jwt');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        const user = this.users.find(x=> x.email === decodedToken.sub)
        console.log(user)
        if(user){
          this.userId = user?.id
        }
      }
    })

   
}


updateUser(){
  this.masterService.updateUser(this.userId, this.newUser).subscribe((data)=>{
    console.log('user updated:', data)
    console.log(this.users)
  })
}


}