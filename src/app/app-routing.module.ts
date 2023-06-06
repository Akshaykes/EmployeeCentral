import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagerComponent } from './employee-manager/employee-manager.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // main page
    path: '',redirectTo:'employee/admin',pathMatch:'full'
  },
  {
    //path for employee manager page
    path: 'employee/admin',component:EmployeeManagerComponent
  },
  {
    //path for add employee manager page
    path: 'employee/add',component:AddEmployeeComponent
  },
  {
    //path for update employee manager page
    path: 'employee/update/:Id',component:UpdateEmployeeComponent
  },
  {
    //path for view employee manager page
    path: 'employee/view/:employeeId',component:ViewEmployeeComponent
  },
  {
    //path for pagenotfound page
    path: '**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
