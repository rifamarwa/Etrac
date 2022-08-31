import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch:'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'employee/edit/:employee.id', component: EditComponent
  },
  {
    path: 'employee/view/:employee.id', component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
