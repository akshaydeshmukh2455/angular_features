import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username:['a',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  submitCall(){
    alert("in submit call..!!");
    console.log("Username: "+this.loginForm.get('username').value);
    console.log("password: "+this.loginForm.get('password').value);
  }

  // fill Form

  fillValue(){
    // setValue for compulsory required all form details and patch value for partial details
    // this.loginForm.setValue({
    //   username:"abc",
    //   password:"abc123"
    // }) 
    this.loginForm.patchValue({
      username:"abc",
      password:"abc123"
    }) 
  }
  resetValue(){
    alert("reset")
    this.loginForm.reset();
  }
}



