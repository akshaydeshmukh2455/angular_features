import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DeptChildComponent } from './dept-child/dept-child.component';
import { EmpChildComponent } from './emp-child/emp-child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'Employee', component:EmployeeListComponent,
    children:[
      {
        path:'Emp-child', component:EmpChildComponent
      }
    ]
  },
    {
        path:'Dept', component:DepartmentListComponent,
        children:[
          {
            path:'Dept-child', component:DeptChildComponent
          }
        ]
    },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
