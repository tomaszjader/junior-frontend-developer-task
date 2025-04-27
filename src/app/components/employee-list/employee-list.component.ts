import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private dataService: EmployeesService) {}
  employees: any[] = [];
  ngOnInit(): void {
    this.employees = this.dataService.getEmployeesJsonData();

  }
}
