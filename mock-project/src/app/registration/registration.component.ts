import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  constructor(private router:Router,public common:CommonService,private form:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm=this.form.group({
      id:[],
      ename:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/')]],
      mobile:['',[Validators.required]],
      designation:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      
    })
  }
  addEmployee(emp:Employee)
  {
    alert("Employee Registration Successful");
    // emp.ename=this.registrationForm.get('ename').value;
    // emp.email=this.registrationForm.get('email').value;
    // emp.mobile=this.registrationForm.get('mobile').value;
    // emp.designation=this.registrationForm.get('designation').value;
    // emp.username=this.registrationForm.get('username').value;
    // emp.password=this.registrationForm.get('password').value;
    this.common.postData(emp).subscribe();
    
    this.router.navigate(['login']);
  }
  resetData(){
    this.registrationForm.reset();
  }
  onSubmit(){
    this.router.navigate(['login']);
  }

}
