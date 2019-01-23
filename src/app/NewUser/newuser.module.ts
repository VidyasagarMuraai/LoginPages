import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from './newuser.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [NewuserComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
  ]
})
export class NewuserModule { }
