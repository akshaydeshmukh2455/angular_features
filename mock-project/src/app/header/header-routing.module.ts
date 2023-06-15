import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GalleryComponent } from '../gallery/gallery.component';

export const headerroutes: Routes = [
  {
    path:'dashbord',component:DashboardComponent
    },
    {
    path:'aboutus',component:AboutUsComponent
    },
    {
      path:'contactus',component:ContactUsComponent
    },
    {
      path:'gallery',component:GalleryComponent
    },
      {
        path:'company',loadChildren:()=>import('src/app/company/company.module').then(module=>module.CompanyModule)
      },
      {
        path:'employee',loadChildren:()=>import('src/app/employee/employee.module').then(module=>module.EmployeeModule)
      }
];

@NgModule({
  imports: [RouterModule.forChild(headerroutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
