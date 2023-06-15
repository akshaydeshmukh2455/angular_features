import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-input-com',
  templateUrl: './input-com.component.html',
  styleUrls: ['./input-com.component.css']
})
export class InputComComponent implements OnInit {
  @Input() name:string;
  @Input() emp:Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
