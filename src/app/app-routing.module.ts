import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'navigator', component: AppComponent},
  {path: 'navigator?tab=0', component: AppComponent},
  {path: "navigator?tab=1", component: AppComponent},
  {path: "navigator?tab=2", component: AppComponent},
  {path: "navigator?tab=3", component: AppComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
