import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-stu-com',
  templateUrl: './stu-com.component.html',
  styleUrls: ['./stu-com.component.css']
})
export class StuComComponent implements OnInit {

  constructor(private common:CommonService) { }
  stuList1:Student[]
  ngOnInit(): void {
   this.stuList1= this.common.stuList;
   this.common.getData().subscribe(data=>{
     this.stuList1=data
   })
  }

}
