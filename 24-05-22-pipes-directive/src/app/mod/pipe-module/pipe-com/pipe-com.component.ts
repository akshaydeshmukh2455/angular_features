import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-com',
  templateUrl: './pipe-com.component.html',
  styleUrls: ['./pipe-com.component.css']
})
export class PipeComComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
  name: string="Welcome to angular";
  todayDate= new Date();
  weeks: string[]=["SUN",'MON',"TUE","WED","THU","FRI","SAT"];
  num:number=20;
  prime:number=1;
  nm:string="10";
  
}
