import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {LmsMaterialModule} from '../lms-material.module';
 
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LmsMaterialModule,
  ]
})
export class DashboardModule { 
 
}
