import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-builder',
  templateUrl: './nested-form-builder.component.html',
  styleUrls: ['./nested-form-builder.component.css']
})
export class NestedFormBuilderComponent implements OnInit {

  constructor(private form:FormBuilder) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.form.group({
      username:[],
      password:[],
      address:this.form.group({
        city:[],
        area:[]
      })
    })
  }
  submitCall(){
    // area
    console.log(this.loginForm.get('username').value);
    console.log(this.loginForm.get('password').value);
    console.log(this.loginForm.get('address').value.city);
    console.log(this.loginForm.get('address').value.area);
  }

}
