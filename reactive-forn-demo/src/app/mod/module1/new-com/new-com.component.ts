import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-com',
  templateUrl: './new-com.component.html',
  styleUrls: ['./new-com.component.css']
})
export class NewComComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UserInfo=new FormGroup({
    firstName:new FormControl(),
    middleName:new FormControl(),
    lastName:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    password:new FormControl,
    address:new FormGroup({
      flatNo:new FormControl(),
      laneNo:new FormControl(),
      landmark:new FormControl(),
      areaname:new FormControl(),
      city:new FormControl(),
      pincode:new FormControl()
    })
  })
  submit(){
    alert("method call....!!!")
    console.log("Firstname= "+this.UserInfo.get('firstName').value)
    console.log("Middletname= "+this.UserInfo.get('middleName').value)
    console.log("Lastname= "+this.UserInfo.get('lastName').value)
    console.log("Mobile= "+this.UserInfo.get('mobile').value)
    console.log("Email= "+this.UserInfo.get('email').value)
    console.log("Password= "+this.UserInfo.get('password').value)
    console.log("FlatNo= "+this.UserInfo.get('address').value.flatNo)
    console.log("LaneNo= "+this.UserInfo.get('address').value.laneNo)
    console.log("Landmark= "+this.UserInfo.get('address').value.landmark)
    console.log("Areaname= "+this.UserInfo.get('address').value.areaname)
    console.log("City= "+this.UserInfo.get('address').value.city)
    console.log("Pincode= "+this.UserInfo.get('address').value.pincode)
  }

}
