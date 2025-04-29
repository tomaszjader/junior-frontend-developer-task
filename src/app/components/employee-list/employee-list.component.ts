import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() employeeStructure!: Employee;

  hasSubordinates(employee: Employee): boolean {
    return employee.subordinates && employee.subordinates.length > 0;
  }

  toggleExpand(employee: Employee): void {
    employee.isExpanded = !employee.isExpanded;
  }
}
