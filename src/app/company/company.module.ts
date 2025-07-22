import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  declarations: [CompanyComponent, CompanyListComponent],
  imports: [CommonModule, CompanyRoutingModule],
})
export class CompanyModule {
  constructor() {
    console.log('Company module loaded...');
  }
}
