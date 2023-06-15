import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  
  constructor(private f:FormBuilder) { }
  registrationForm:FormGroup;
  ngOnInit(): void {

    this.registrationForm=this.f.group({
      fname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email:['',[Validators.email]],
      password:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.maxLength(10)]],
      address:this.f.group({
        area:['',[Validators.required]],
        city:['',[Validators.required]]
      })
    })
  }
  fillForm(){
    this.registrationForm.patchValue({
      fname:"abc",
      lname:"pqr",
      email:"abc@gmail.com",
      password:"abc",
      mobile:"2222222222",
      address:{
        area:"karve",
        city:"pune"
      }
    })
  }
  submitCall(){
    
  }
  resetData(){
    this.registrationForm.reset();
  }

}
