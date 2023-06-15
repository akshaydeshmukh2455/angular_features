import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComComponent } from './new-com/new-com.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewComComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    NewComComponent
  ]
})
export class Module1Module { }
