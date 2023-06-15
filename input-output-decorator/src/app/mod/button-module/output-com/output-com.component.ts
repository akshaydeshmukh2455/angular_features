import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-com',
  templateUrl: './output-com.component.html',
  styleUrls: ['./output-com.component.css']
})
export class OutputComComponent implements OnInit {
  @Input() name:string;
  @Output() clickKnowEvent=new EventEmitter();

  clickName:string="i am child"
  constructor() { }

  ngOnInit(): void {
  }
  clickHere(){
    console.log("i am click here method");
    this.clickKnowEvent.emit(this.clickName)
  }

}
