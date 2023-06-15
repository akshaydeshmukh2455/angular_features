import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-stu-details',
  templateUrl: './stu-details.component.html',
  styleUrls: ['./stu-details.component.css']
})
export class StuDetailsComponent implements OnInit {

  constructor(private common:CommonService) { }
  stuData:Student[]
  ngOnInit(): void {
    this.stuData=this.common.stuList
    this.common.getData().subscribe(data=>{
      this.stuData=data
    })
  }

}
