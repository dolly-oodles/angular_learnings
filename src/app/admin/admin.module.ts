import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.warn('Admin Module');

@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
