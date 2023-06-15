import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // //Microservice
  // save:string="http://localhost:9595/save"
  // getEmp:string="http://localhost:9596/getAllEmployee"
  // delete:string="http://localhost:9597/delete"
  // update:string="http://localhost:9598/update"
  // singleData:string="http://localhost:9599/single/"
  
  
  // Webservice
  // url:string="http://localhost:3000/Employee"
  getEmp:string="http://localhost:8085/getAllEmployee";
  singleData:string="http://localhost:8085/single/";
  save:string="http://localhost:8085/saveEmployee";
  update:string="http://localhost:8085/updateEmployee";
  delete:string="http://localhost:8085/deleteData";

  constructor(private http:HttpClient) { }
    e:Employee={
      id: 0,
      ename: '',
      email: '',
      mobile: '',
      designation: '',
      username: '',
      password: ''
    }

  
  getData():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmp);
  }

  postData(emp:Employee):Observable<Employee>{
   return this.http.post<Employee>(this.save+"/",emp)
  }


  deleteData(id:number){
    return this.http.delete(this.delete+"/"+id);
  }
  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.singleData+id);

  }
  updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.update+"/"+emp.id,emp);
  }
}
