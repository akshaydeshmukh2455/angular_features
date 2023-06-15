import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-reactive-forms',
  templateUrl: './nested-reactive-forms.component.html',
  styleUrls: ['./nested-reactive-forms.component.css']
})
export class NestedReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl(),
    address:new FormGroup({
        area:new FormControl(),
        city:new FormControl()
    })
  })

  submitData(){
    alert("submit....");
    // value.password
    // console.log("Username= "+this.loginForm.value.username)
    console.log("Username= "+this.loginForm.get('username').value)
    console.log("Password= "+this.loginForm.get('password').value)
    console.log("Area= "+this.loginForm.get('address').value.area)
    console.log("City= "+this.loginForm.get('address').value.city)
    
  }
}
