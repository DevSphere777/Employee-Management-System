import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ModalComponent } from './modal/modal.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"main", component:UserComponent},
  {path:"admin", component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
