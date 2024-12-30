import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { SettingsComponent } from './settings/settings.component';
import { RecallComponent } from './recall/recall.component';
import { HistoryComponent } from './history/history.component';
import { OfficersComponent } from './officers/officers.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthorizationComponent,
    LoginComponent,
    AdminPageComponent,
    DashboardComponent,
    LeaveManagementComponent,
    SettingsComponent,
    RecallComponent,
    HistoryComponent,
    OfficersComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
