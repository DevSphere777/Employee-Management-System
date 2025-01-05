import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { Root } from '../User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: Root[] = [];
  userData: string | null = null;

  constructor(private routes: Router, private masterService: MasterService) {}

  ngOnInit() {
    this.masterService.getUser().subscribe((data) => {
      this.user = data;

      // Find the user and store their username
      const find = this.user.find((x) => x.id);
      if (find && find.username) {
        localStorage.setItem('loggedInUser', find.username);
        this.userData = localStorage.getItem('loggedInUser');
        console.log('Logged in user:', this.userData);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedInUser');
    this.routes.navigateByUrl('/login');
  }


  editProf(){
    const edit = document.querySelector('.modal') as HTMLElement;
    const ovrl = document.querySelector('.overlay') as HTMLElement;
    if (edit) {
      if (edit.style.display === 'none' || edit.style.display === '') {
        edit.style.display = 'block';
        ovrl.style.display = 'block';
      } else {
        ovrl.style.display = 'none';
        edit.style.display = 'none';
      }
    
  }
}
}
