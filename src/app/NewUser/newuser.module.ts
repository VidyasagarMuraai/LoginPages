import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from './newuser.component';
import {AppRoutingModule} from '../app-routing.module';
import { LmsMaterialModule} from '../lms-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [NewuserComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LmsMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class NewuserModule { }
