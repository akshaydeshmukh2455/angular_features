import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm={
    username:"",
    password:""
  }

  submitCall(){
    alert("submit call.....");
    console.log("Username= "+this.loginForm.username);
    console.log("Password= "+this.loginForm.password)
  }

}
