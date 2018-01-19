import { NgModule } from '@angular/core';
import { Router,RouterModule, Routes,CanActivate} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin.component';
//import { MyauthguardGuard } from '../myauthguard.guard';



//If user type admin else load qatheme OR admintheme it should be dynamic variable

import { HeaderComponent } from '../layouts/admintheme/header/header.component';
import { FooterComponent } from '../layouts/admintheme/footer/footer.component';
import { LeftpanelComponent } from '../layouts/admintheme/leftpanel/leftpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
           // canActivate: [MyauthguardGuard]
          }
          ,
          {
            path: 'users',
            component: UsersComponent,
            //canActivate: [MyauthguardGuard]
          },
          {path: 'users/:id', component: UsersComponent}
        ]
      }
    ])
  ],
  
  declarations: [AdminComponent,HeaderComponent,FooterComponent,LeftpanelComponent, DashboardComponent, UsersComponent]
})
export class AdminModule { }
