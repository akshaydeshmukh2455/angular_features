import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedFormBuilderComponent } from './nested-form-builder/nested-form-builder.component';
import { ValidationComponent } from './validation/validation.component';



@NgModule({
  declarations: [
    FormBuilderComponent,
    NestedFormBuilderComponent,
    ValidationComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    FormBuilderComponent,NestedFormBuilderComponent,ValidationComponent
  ]
})
export class Module1Module { }
