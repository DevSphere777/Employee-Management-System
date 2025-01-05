import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"main", component:UserComponent, children:[
    {path:"assignment", component:AssignmentsComponent},
    {path:"employees", component:EmployeesComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
