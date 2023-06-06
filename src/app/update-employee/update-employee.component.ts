import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyEmployee } from 'src/models/myEmployee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId:string='';
  employee:MyEmployee={}

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router) { }

  ngOnInit(): void {
       // get particular employee id
       this.activatedRoute.params.subscribe((data:any)=>{
        console.log(data); //{employeeId:'7012'}
        this.employeeId=data.Id;
        console.log(this.employeeId); //7012

        
      //view contact api call
      this.api.viewEmployee(this.employeeId).subscribe((data:any)=>{
        console.log(data); //employee data
        this.employee = data
  
  })
})
  
}

updateEmployee(){
  this.api.updateEmployee(this.employeeId,this.employee).subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })
}
}
