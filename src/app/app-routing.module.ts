import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'navigator' },
  { path: 'navigator', component: ListComponent },
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
