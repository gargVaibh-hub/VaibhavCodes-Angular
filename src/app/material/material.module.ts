import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Defining all modules in a variable to avoid duplicacy in imports/exports
const matModule = [MatSlideToggleModule, MatCheckboxModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, matModule],
  exports: [matModule],
})
export class MaterialModule {}
