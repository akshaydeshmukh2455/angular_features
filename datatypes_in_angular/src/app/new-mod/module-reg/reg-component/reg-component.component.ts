import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model-user/user';

@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})
export class RegComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name:string="";
  lastname:string="";
  email:string="";
  password:string="";
  city:string="";
  area:string="";

  // register(){
  //   console.log("Name= "+this.name);
  //   console.log("LastName= "+this.lastname);
  //   console.log("Email= "+this.email);
  //   console.log("Password= "+this.password);
  //   console.log("City= "+this.city);
  //   console.log("Area= "+this.area);
  // }

  us:User={
    name: '',
    lastname: '',
    email: '',
    password: '',
    city: '',
    area: ''
  }

  register(){
    console.log("Name= "+this.us.name);
    console.log("LastName= "+this.us.lastname);
    console.log("Email= "+this.us.email);
    console.log("Password= "+this.us.password);
    console.log("City= "+this.us.city);
    console.log("Area= "+this.us.area);
  }

  a:number;
  b:number;
  c:number

  add(){
    this.c=this.a+this.b
    console.log("Add= "+this.c)
  }

  sub(){
    this.c=this.a-this.b
    console.log("Sub= "+this.c)
  }

  multi(){
    this.c=this.a*this.b
    console.log("Multi= "+this.c)
  }

  div(){
    this.c=this.a/this.b
    console.log("Div= "+this.c)
  }

  flag:boolean=false
  getMethod(){
    alert("Method Called")
  }

  j:string="This is event binding example"

  mouseOverEvent(){
    this.j="Mouse Over Event Occurs"
  }

  
}
