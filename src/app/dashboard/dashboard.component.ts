import { Component, AfterViewInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Root } from '../User.model';
import { data } from 'jquery';

// Declare jQuery to avoid TypeScript errors
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  currentMonth = new Date();
  users: Root[] = [];

  constructor(private masterService:MasterService){}

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }

  ngOnInit(){
    return this.masterService.getUser().subscribe((data)=>{
      this.users = data;
    })
  }


  deleteUser(userId: string): void {
    this.masterService.deleteUser(userId).subscribe(
      response => {
        console.log('User deleted successfully:', response);
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }
}

