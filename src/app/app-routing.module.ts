import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heros', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  // The `forRoot()` method supplies the service providers and directives needed for routing,
  // and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
