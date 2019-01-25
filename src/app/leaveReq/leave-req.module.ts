import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveReqComponent } from './leave-req.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [LeaveReqComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
  ]
})
export class LeaveReqModule { }
