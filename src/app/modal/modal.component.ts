// modal.component.ts
import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  userId: string = '';
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

  ngOnInit(): void {
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      
      this.userId = parsedUser.id || ''; 
      console.log('User ID from localStorage:', this.userId);
    } else {
      this.userId = ''; 
      console.log('No loggedInUser found in localStorage');
    }
  }

  updateUserData() {
    this.masterService.updateUser(this.userId, this.newUser).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        alert('User updated successfully');
      },
      (error) => {
        console.error('Error updating user:', error);
        alert('Error updating user');
      }
    );
  }
}
