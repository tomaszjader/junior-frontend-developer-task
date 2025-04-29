import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-selector',
  templateUrl: './employee-selector.component.html',
  styleUrls: ['./employee-selector.component.css']
})
export class EmployeeSelectorComponent {
  employees: Employee[] = [];
  @Output() employeeSelected = new EventEmitter<Employee>();

  constructor(private employeesService: EmployeesService) {
    this.employees = this.employeesService.getEmployees();
  }

  getSelectedValue(event: Event): string {
    return (event.target as HTMLSelectElement).value;
  }

  onSelect(employeeId: string): void {
    const selectedEmployee = this.employees.find(emp => emp.id === employeeId);
    if (selectedEmployee) {
      this.employeeSelected.emit(selectedEmployee);
    }
  }
}