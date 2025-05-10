import { Injectable } from '@angular/core';
import employeeStructure from '../data/employee-structure.json';
import employeesList from '../data/employees.json';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(): Employee[] {
    return employeesList.map(emp => ({
      ...emp,
      subordinates: [],
      isExpanded: false
    }));
  }

  getEmployeeStructure(): Employee {
    return employeeStructure;
  }

  getEmployeeById(employees: Employee, id: string): Employee | null {
    if (employees.id === id) {
      return employees;
    }
    
    return employees.subordinates.reduce<Employee | null>((found, subordinate) => {
      if (found) return found;
      return this.getEmployeeById(subordinate, id);
    }, null);
  }

  findSupervisorPath(targetId: string): Employee[] {
    const structure = this.getEmployeeStructure();
    const path: Employee[] = [];
    this.findSupervisorPathRecursive(structure, targetId, [], path);
    return path;
  }

  private findSupervisorPathRecursive(current: Employee, targetId: string, currentPath: Employee[], result: Employee[]): boolean {
    if (current.id === targetId) {
      result.push(...currentPath, current);
      return true;
    }

    for (const subordinate of current.subordinates) {
      if (this.findSupervisorPathRecursive(subordinate, targetId, [...currentPath, current], result)) {
        return true;
      }
    }

    return false;
  }
}
