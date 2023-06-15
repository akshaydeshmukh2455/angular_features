import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComComponent } from './input-com/input-com.component';
import { OutputComComponent } from './output-com/output-com.component';



@NgModule({
  declarations: [
    InputComComponent,
    OutputComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InputComComponent,OutputComComponent
  ]
})
export class ButtonModuleModule { }
