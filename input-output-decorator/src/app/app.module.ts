import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModuleModule } from './mod/button-module/button-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ButtonModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
