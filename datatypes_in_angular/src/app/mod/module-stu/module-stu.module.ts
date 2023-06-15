import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDataComponent } from './s-data/s-data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SDataComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    SDataComponent
  ]
})
export class ModuleStuModule { }
