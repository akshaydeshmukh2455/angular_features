import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router, private form:FormBuilder) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.form.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  callBack()
  {
    alert('Login Successful');
    if(this.loginForm.valid){
    this.router.navigate(['login/header']);
    }
  }
  resetValue(){
    this.loginForm.reset();
  }

  
}
