import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavListComponent } from './navbar/nav-list/nav-list.component';
import { NavItemComponent } from './navbar/nav-list/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavListComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
