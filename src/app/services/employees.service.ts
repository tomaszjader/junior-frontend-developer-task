import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import employeeStructure from '../data/employee-structure.json';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployeeStructure(): Employee {
    return employeeStructure;
  }

  getEmployeeById(employees: Employee, id: string): Employee | null {
    if (employees.id === id) {
      return employees;
    }
    
    for (const subordinate of employees.subordinates) {
      const found = this.getEmployeeById(subordinate, id);
      if (found) {
        return found;
      }
    }
    
    return null;
  }
}
