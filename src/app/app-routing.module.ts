import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableTestComponent } from './components/table-test/table-test.component'

const routes: Routes = [
  {
    path: 'table',
    component: TableTestComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
