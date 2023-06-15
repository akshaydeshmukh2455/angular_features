import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empList:Employee[];
  constructor(public common:CommonService) { }

  ngOnInit(): void {
    this.common.getData().subscribe((data:Employee[])=>{
      this.empList=data;
    })
  }
  deleteData(id:number){
    return this.common.deleteData(id).subscribe();
    // window.location.reload();
  }

}
