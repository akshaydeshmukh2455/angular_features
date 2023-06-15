import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-s-data',
  templateUrl: './s-data.component.html',
  styleUrls: ['./s-data.component.css']
})
export class SDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // String Interpolation
  // a:number =10;
  // b:number =20.23;

  // name:string ='abc';
  // nameChar:string ='a';

  // flag:boolean =false;
  // numArray:number[]=[2,3,4,5,6];

  //  stu:Student={
  //   rollno:10,
  //   name:'shiv',
  //   addr:{
  //     city:'mumbai',
  //     area:'andheri'
  //   }
  // }

  // stu1:Student={
  //   rollno:2,
  //   name:'ram',
  //   addr:{
  //     city:'pune',
  //     area:'karve'
  //   }
  // }

  // stuList: Student[]=[
  //   this.stu,
  //   this.stu1,
  //   {
  //     rollno:5,
  //     name:'piyush',
  //     addr:{
  //       city:'buldana',
  //       area:'ramnagar'
  //     }
  //   }
  // ];


  // getString():string{
  //   return "hello....!!!"
  // }

  // getSum(){
  //   return 50+70;
  // }

  // m1():number{
  //   return 10+30;
  // }
  // x:any=40;

  // m2():Student{
    
  //   return this.stu;
  // }

  // Property Binding
  name:string="ABC";
  flag:boolean=true
  
  // Event Binding
  // getMethod(){
  //   alert("Method Called")
  // }

  a:string="This is event binding example"

  mouseOverEvent(){
    this.a="Mouse Over Event Occurs"
  }
  mouseOutEvent(){
    this.a="Mouse Out Event Occurs"
  }

  // Two way data binding
  city:string="pune"
}



