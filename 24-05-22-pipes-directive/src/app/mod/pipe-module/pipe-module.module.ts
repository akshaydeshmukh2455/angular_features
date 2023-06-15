import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComComponent } from './pipe-com/pipe-com.component';
import { CustomPipe } from './custom.pipe';
import { FormsModule } from '@angular/forms';
import { PrimePipe } from './prime.pipe';
import { MobilenumberPipe } from './mobilenumber.pipe';



@NgModule({
  declarations: [
    PipeComComponent,
    CustomPipe,
    PrimePipe,
    MobilenumberPipe
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    PipeComComponent
  ]
})
export class PipeModuleModule { }
