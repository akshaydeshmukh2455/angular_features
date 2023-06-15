import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponentComponent } from './reg-component/reg-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegComponentComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    RegComponentComponent
  ]
})
export class ModuleRegModule { }
