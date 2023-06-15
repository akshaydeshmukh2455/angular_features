import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NestedReactiveFormsComponent } from './nested-reactive-forms/nested-reactive-forms.component';



@NgModule({
  declarations: [
    TemplateDrivenFormsComponent,
    ReactiveFormComponent,
    NestedReactiveFormsComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    TemplateDrivenFormsComponent,ReactiveFormComponent,NestedReactiveFormsComponent
  ]
})
export class FormsModuleModule { }
