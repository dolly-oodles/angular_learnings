import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // {
  //   path: 'user',
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //     { path: 'list', component: ListComponent },
  //   ],
  // },

  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
