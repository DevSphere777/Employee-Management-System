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

  id: any;
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
      const logged = this.users.find(x=> x.id);
      console.log(logged)
      this.id = logged?.id

    })
}


updateUser(){
  this.masterService.updateUser(this.id, this.newUser).subscribe((data)=>{
    console.log('user updated:', data)
    console.log(this.users)
  })
}


}