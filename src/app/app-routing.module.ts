import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { SettingsComponent } from './settings/settings.component';
import { RecallComponent } from './recall/recall.component';
import { HistoryComponent } from './history/history.component';
import { OfficersComponent } from './officers/officers.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminPageComponent, children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"leave", component:LeaveManagementComponent, children:[
      {path:"settings", component:SettingsComponent},
      {path:"recall", component:RecallComponent},
      {path:"history", component:HistoryComponent},
      {path:"officers", component:OfficersComponent}
    ]},

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
