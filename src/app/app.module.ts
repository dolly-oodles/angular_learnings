import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ChildComponent } from './child/child.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { RedElDirective } from './red-el.directive';
import { UpdateValDirective } from './update-val.directive';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ChildComponent,
    UsdInrPipe,
    RedElDirective,
    UpdateValDirective,
    UserComponent,
    HomeComponent,
    AboutComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
