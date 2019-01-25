import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewuserComponent} from './NewUser/newuser.component';
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
    path: 'dashboard',

    children :[
    
      {
        path:'Newuser',
        component:NewuserComponent,
      },
      {
        path:'EmpDetails',
        component:DashboardComponent,
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
