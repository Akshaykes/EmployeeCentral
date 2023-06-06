import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  // to hold employee id
  employeeId:string=''; 

  //to particular employee details
  employee:any=[]

  constructor(private activatedroute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data);
      this.employeeId=data.employeeId;
      console.log(this.employeeId);
      //get particular employee details
      this.api.viewEmployee(this.employeeId).subscribe((data:any)=>{
        console.log(data);
        this.employee=data;
      })
    })
  }
}
