// modal.component.ts
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { Root } from '../User.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  userId: string = '';
  logedUser: any[] = [];
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


      const user = localStorage.getItem('loggedInUser');
      if(user){
        const parsed = JSON.parse(user);
        this.logedUser.push(parsed);
        console.log(this.logedUser)
        for(let i of this.logedUser){
          this.userId = i.id;
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