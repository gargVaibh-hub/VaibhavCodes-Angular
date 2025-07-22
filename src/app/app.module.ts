import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImplementationComponent } from './demo/implementation/implementation.component';
import { StudentComponent } from './Student/student/student.component';
import { ChildofStudentComponent } from './ChildOfStudent/childof-student/childof-student.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { Emp } from './emp';
import { FormsModule } from '@angular/forms';
import { WelcomePipe } from './welcome.pipe';
import { LimitwordPipe } from './limitword.pipe';
import { Example1Component } from './Service Example/example1/example1.component';
import { CommonServiceService } from './common-service.service';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AboutusComponent } from './Dashboard/aboutus/aboutus.component';
import { ContactusComponent } from './Dashboard/contactus/contactus.component';
import { PagenotfoundComponent } from './Dashboard/pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './Student/studentdetails/studentdetails.component';
import { BookComponent } from './Books/book/book.component';
import { BookdetailsComponent } from './Books/bookdetails/bookdetails.component';
import { LoginComponent } from './login/login.component';
import { AboutusnewComponent } from './Dashboard/aboutusnew/aboutusnew.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { TemplateformComponent } from './Forms/templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    ImplementationComponent,
    StudentComponent,
    ChildofStudentComponent,
    EmployeeComponent,
    WelcomePipe,
    LimitwordPipe,
    Example1Component,
    DashboardComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    StudentdetailsComponent,
    BookComponent,
    BookdetailsComponent,
    LoginComponent,
    AboutusnewComponent,
    HomeComponent,
    TemplateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(TestData),
    HttpClientModule,
    // For Eager Loading
    // PersonModule,
    // CompanyModule,
  ],
  providers: [Emp, CommonServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
