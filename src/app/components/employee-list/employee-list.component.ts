import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

interface Employee {
  firstName: string;
  lastName: string;
  id: string;
  subordinates: Employee[];
  isExpanded?: boolean;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeStructure!: Employee;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeeStructure = this.employeesService.getEmployeeStructure();
  }
}
