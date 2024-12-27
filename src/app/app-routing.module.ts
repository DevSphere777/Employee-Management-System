import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminPageComponent, children:[
    {path:"dashboard", component:DashboardComponent}

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
