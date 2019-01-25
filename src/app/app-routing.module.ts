import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewuserComponent} from './NewUser/newuser.component';
import {LeaveReqComponent} from './leaveReq/leave-req.component';
const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'full'
    
  },
  {
    path: 'select',
    children :[
    
      {
        path:'Newuser',
        component:NewuserComponent,
      },
     
      {
      path: 'dashboard',
      component:DashboardComponent,
      },
      {
        path: 'leaveReq',
        component:LeaveReqComponent,
      },

      

    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
