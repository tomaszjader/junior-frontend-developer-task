import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-hierarchy',
  templateUrl: './employee-hierarchy.component.html',
  styleUrls: ['./employee-hierarchy.component.css']
})
export class EmployeeHierarchyComponent implements OnChanges {
  @Input() selectedEmployee: Employee | null = null;
  supervisors: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedEmployee'] && this.selectedEmployee) {
      this.findSupervisors(this.selectedEmployee);
    }
  }

  private findSupervisors(employee: Employee): void {
    this.supervisors = this.employeesService.findSupervisorPath(employee.id);
  }

  trackBySupervisorId(index: number, supervisor: Employee): number {
    return Number(supervisor.id);
  }
}