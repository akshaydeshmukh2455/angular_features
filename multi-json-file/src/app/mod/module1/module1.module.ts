import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuComComponent } from './stu-com/stu-com.component';
import { EmpComComponent } from './emp-com/emp-com.component';
import { CompanyComComponent } from './company-com/company-com.component';



@NgModule({
  declarations: [
    StuComComponent,
    EmpComComponent,
    CompanyComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StuComComponent,EmpComComponent,
    CompanyComComponent
  ]
})
export class Module1Module { }
