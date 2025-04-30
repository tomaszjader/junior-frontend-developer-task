import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSelectorComponent } from './components/employee-selector/employee-selector.component';
import { EmployeeHierarchyComponent } from './components/employee-hierarchy/employee-hierarchy.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSelectorComponent,
    EmployeeHierarchyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
