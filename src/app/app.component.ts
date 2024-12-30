import { Component } from '@angular/core';
// import { Root } from './User.model';
import { MasterService } from './master.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: [] = [];

  constructor(private backEnd:MasterService, private httpClient:HttpClient){}

  ngOnInit(){


    this.backEnd.getUser().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    })

  }
  


}
