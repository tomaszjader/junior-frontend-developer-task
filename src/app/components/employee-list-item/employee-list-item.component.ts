import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent {
  @Input() employee!: Employee;

  hasSubordinates(employee: Employee | undefined): boolean {
    if (!employee) return false;
    return Array.isArray(employee.subordinates) && employee.subordinates.length > 0;
  }

  toggleExpand(employee: Employee | undefined): void {
    if (!employee) return;
    employee.isExpanded = !employee.isExpanded;
  }
}