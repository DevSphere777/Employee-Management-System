import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"main", component:UserComponent, children:[
    {path:"employees", component:EmployeesComponent},
    {path:"assignments", component:AssignmentsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
