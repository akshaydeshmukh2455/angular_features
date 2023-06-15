import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm:FormGroup;
  constructor(private form:FormBuilder,private common:CommonService,private locations:Location) { }

  ngOnInit(): void {
    this.updateForm=this.form.group({
      id:[],
      ename:[''],
      email:[''],
      mobile:[''],
      designation:[''],
      username:[''],
      password:[''],      
    })
    this.editData();
  }

  editData(){
  
    let empObj:any=this.locations.getState();
    if(empObj.id!=0){
      this.updateForm.get('id').setValue(empObj.id);
      this.updateForm.get('ename').setValue(empObj.ename);
      this.updateForm.get('email').setValue(empObj.email);
      this.updateForm.get('mobile').setValue(empObj.mobile);
      this.updateForm.get('designation').setValue(empObj.designation);
      this.updateForm.get('username').setValue(empObj.username);
      this.updateForm.get('password').setValue(empObj.password);
    }
  }
  goBack(){
    this.locations.back();
  }
  onSubmit(){
    this.common.updateEmployee(this.updateForm.value).subscribe();
    this.locations.back();
    // window.location.reload();
  }

}
