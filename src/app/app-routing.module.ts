import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { ImplementationComponent } from './demo/implementation/implementation.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { AboutusComponent } from './Dashboard/aboutus/aboutus.component';
import { ContactusComponent } from './Dashboard/contactus/contactus.component';
import { PagenotfoundComponent } from './Dashboard/pagenotfound/pagenotfound.component';
import { StudentComponent } from './Student/student/student.component';
import { StudentdetailsComponent } from './Student/studentdetails/studentdetails.component';
import { BookComponent } from './Books/book/book.component';
import { BookdetailsComponent } from './Books/bookdetails/bookdetails.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { resolvGuard } from './resolv.guard';
import { AboutusnewComponent } from './Dashboard/aboutusnew/aboutusnew.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { authLoadGuard } from './auth-load.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home', // redirecting to home component when base URL is hit, it can be placed anywhere up/down
  //   pathMatch: 'full',
  // },
  {
    path: 'implement',
    component: ImplementationComponent,
    title: 'Implementation',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'home',
    component: DashboardComponent,
    title: 'Home',
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canActivate: [authGuard],
  },
  {
    path: 'student',
    children: [
      {
        path: '',
        component: StudentComponent,
      },
      {
        path: 'studentDetail',
        component: StudentdetailsComponent,
      },
    ],
  },
  {
    path: 'books',
    component: BookComponent,
    title: 'Books',
  },
  {
    path: 'bookdetails/:id',
    component: BookdetailsComponent,
    resolve: { objBook: resolvGuard },
  },
  {
    path: 'aboutusnew',
    component: AboutusnewComponent,
    outlet: 'auxiliaryRouter', // This route is defined for auxiliary routing
  },
  // Eagerly/Lazy/preloading example
  {
    path: 'home2',
    component: HomeComponent,
    title: 'Home2',
  },
  {
    path: 'company',
    // Lazy Loading
    loadChildren: () =>
      import('../app/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'person',
    // Lazy Loading
    loadChildren: () =>
      import('../app/person/person.module').then((m) => m.PersonModule),
    // canActivate: [authLoadGuard], // It restricts the access without login but the module is still loaded in background
    canLoad: [authLoadGuard], // Prevents loading if user access denied
  },
  // wildcard route depicted by ** is always defined at the last because
  // where it is defined it does not match the routes afterwards
  // will be commented in case of Eager loading
  // {
  //   path: '**',
  //   component: PagenotfoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Preloading Example, can be implemented only when module is in Lazy Loading
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })], // Loaded on click
  // imports: [
  //   RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Loaded before click
  // ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
