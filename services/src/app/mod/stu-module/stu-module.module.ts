import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuComComponent } from './stu-list/stu-com.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';



@NgModule({
  declarations: [
    StuComComponent,
    StuDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StuComComponent,StuDetailsComponent
  ]
})
export class StuModuleModule { }
