import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleStuModule } from './mod/module-stu/module-stu.module';
import { ModuleRegModule } from './new-mod/module-reg/module-reg.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleStuModule,
    ModuleRegModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
