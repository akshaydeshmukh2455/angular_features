import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-decorator';
  a:string="LOGIN";

  e:Employee={
    id: 1,
    name: 'abc'
  }

  login(a){
    console.log("i am parent "+a)
  }
}
