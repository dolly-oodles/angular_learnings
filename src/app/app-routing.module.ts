import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },

  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'user/:id',
  //   component: UserComponent,
  //   children: [
  //     {
  //       path: 'child',
  //       component: ChildComponent,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  // {
  //   path: '**',
  //   component: NotFoundPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
