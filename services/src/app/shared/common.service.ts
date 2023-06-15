import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  uri:string="  http://localhost:3000/student"
  constructor(private http:HttpClient) { }
  stu:Student={
    rollno: 1,
    name: 'abc'
  }

  stu1:Student={
    rollno: 2,
    name: 'pqr'
  }

  stu2:Student={
    rollno: 3,
    name: 'xyz'
  }

  stuList:Student[]=[
    this.stu,this.stu1,this.stu2
  ]

  getData():Observable<Student[]>{
    return this.http.get<Student[]>(this.uri)
  }
}
