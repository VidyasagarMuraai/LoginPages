import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { LmsMaterialModule} from '../lms-material.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    LmsMaterialModule,
  ]
})
export class DialogModule { }
