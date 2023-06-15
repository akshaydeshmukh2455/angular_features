import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrDirectiveComponent } from './str-directive/str-directive.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StrDirectiveComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StrDirectiveComponent
  ]
})
export class DirectiveModule { }
