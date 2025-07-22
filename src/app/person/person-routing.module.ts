import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  // For Eager Loading
  // {
  //   path: 'person',
  //   component: PersonComponent,
  //   children: [{ path: 'personlist', component: PersonListComponent }],
  // },

  // For Lazy Loading
  {
    path: '',
    component: PersonComponent,
    children: [{ path: 'personlist', component: PersonListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
