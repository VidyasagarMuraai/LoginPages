import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { LmsMaterialModule} from '../lms-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    LmsMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

  ]
 
})

export class DialogModule { }
