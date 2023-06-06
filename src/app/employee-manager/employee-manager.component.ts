import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyEmployee } from 'src/models/myEmployee';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

  // to hold all employees details
     allEmployees:MyEmployee[] = [];
      // to hold data from user
    searchKey:string=''
  
     constructor(private api: ApiService) { }

     ngOnInit(): void {
        this.getAllEmployees();
     }
     getAllEmployees(){
      this.api.getAllEmployees().subscribe((result:any)=>{
        console.log(result); 
        this.allEmployees=result;
      })
     }
     search(event:any){
      console.log(event.target.value);
      this.searchKey=event.target.value
      
    }
    deleteEmployee(employeeId:any){
      this.api.deleteEmployee(employeeId).subscribe((result:any)=>{
        alert('Contact Will Be Deleted')
        this.getAllEmployees()
      })
    }
}
