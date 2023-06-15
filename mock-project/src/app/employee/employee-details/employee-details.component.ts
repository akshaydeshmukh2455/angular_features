import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  empObj:Employee;
  constructor(private routes:ActivatedRoute,private common:CommonService,private locations:Location) { }

  ngOnInit(): void {

    // firts way is snapshot
    // let empid=parseInt(this.routes.snapshot.paramMap.get('id'));
    // this.common.getEmployee(empid).subscribe(data=>{
    //   console.log("show employee "+empid)
    //   this.empObj=data;
    // });

    // second way is observable

    this.routes.paramMap.subscribe(param1=>{
      this.common.getEmployee(parseInt(param1.get('id'))).subscribe(data=>{
        this.empObj=data;
      })
    })
  }
  getback(){
    this.locations.back();
  }

}
