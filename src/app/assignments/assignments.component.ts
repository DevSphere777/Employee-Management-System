import { ChangeDetectorRef, Component } from '@angular/core';
import { Root } from '../User.model';
import { MasterService } from '../master.service';

interface Assignment {
  id: number;
  title: string;
  description: string;
  users: Root[];
}

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  users: Root[] = [];
  assignments: Assignment[] = [];
  selectedUser: string[] = [];
  email: any;

  newAssignment = {
    title: '',
    description: '',
    users: [] as Root[]
  };

  constructor(private masterService: MasterService, private cdRef:ChangeDetectorRef) {}

  ngOnInit() {
    this.masterService.getUser().subscribe((data: Root[]) => {
      this.users = data;
      console.log(data)

      this.users.forEach((user) => {
        this.email = user.email; 
        console.log(this.email);
      });

      this.masterService.getAssignments().subscribe((data: Assignment[]) => {
        this.assignments = data;
      });
    });
  }

  onChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedUserId = selectElement.value; 
    
    const selectedUser = this.users.find(user => user.firstName === selectedUserId);

    if (selectedUser && !this.newAssignment.users.includes(selectedUser)) {
      this.newAssignment.users.push(selectedUser); 
    }
    console.log('Selected users:', this.newAssignment.users);
  }

  confirm() {
    this.masterService.postAssignment(this.newAssignment).subscribe((response) => {
      console.log(response);
      this.newAssignment = { title: '', description: '', users: [] };
      this.cdRef.detectChanges();
    });
  }

  openModal(){
    const modal = document.querySelector('.assignmentModal') as HTMLElement;
    const card = document.querySelectorAll('.assignmentContainer') as NodeListOf<HTMLElement>;
    const btn = document.querySelector('.btn') as HTMLElement
    
      modal.style.display = "flex"
      card.forEach(cards => {
        cards.style.display = "none"
        btn.style.display = "none"
      })
  }


  closeModal(){
    const modal = document.querySelector('.assignmentModal') as HTMLElement;
    const card = document.querySelectorAll('.assignmentContainer') as NodeListOf<HTMLElement>;
    const btn = document.querySelector('.btn') as HTMLElement
    
      modal.style.display = "none"
      card.forEach(cards => {
        cards.style.display = "flex"
        btn.style.display = "block"
      })
      window.location.reload();  

  }
}
