import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-directive',
  templateUrl: './str-directive.component.html',
  styleUrls: ['./str-directive.component.css']
})
export class StrDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num:number[]=[1,2,3,4,5];
  months:number[]=[];

  choice:string;
}
