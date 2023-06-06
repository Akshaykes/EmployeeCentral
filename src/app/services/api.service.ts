import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyEmployee } from 'src/models/myEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/employees';
  //dependency injection
  constructor(private http: HttpClient) { }

  // function to get all employees
  getAllEmployees(): Observable<MyEmployee> {
    return this.http.get(this.baseUrl)
  }

  // api call for fetch particular employee details
  viewEmployee(employeeId: string) {
    return this.http.get(`${this.baseUrl}/${employeeId}`)
  }

  //api call for add new employee
  addEmployee(employeeBody: any) {
    return this.http.post(this.baseUrl, employeeBody)
  }
  // api call for deleting employee from the server

  deleteEmployee(employeeId: any) {

    return this.http.delete(`${this.baseUrl}/${employeeId}`)
  }
  updateEmployee(employeeId: any, employeeBody: any) {
    return this.http.put(`${this.baseUrl}/${employeeId}`, employeeBody)
  }
}
