import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyEmployee } from 'src/models/myEmployee';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:MyEmployee={}

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {
    
  }
  addEmployee(){
    this.api.addEmployee(this.employee).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
