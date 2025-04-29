import { Component } from '@angular/core';
import { Employee } from './interfaces/employee';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmployee: Employee | null = null;
  employeeStructure: Employee | null = null;

  constructor(private employeesService: EmployeesService) {}

  onEmployeeSelected(employee: Employee): void {
    this.selectedEmployee = employee;
    const structure = this.employeesService.getEmployeeStructure();
    this.employeeStructure = this.employeesService.getEmployeeById(structure, employee.id);
  }
}
