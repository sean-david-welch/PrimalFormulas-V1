import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NavListComponent } from './navbar/nav-list/nav-list.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavLogoComponent } from './components/nav-logo/nav-logo.component';
import { IconsComponent } from './components/icons/icons.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NavListComponent,
        NavButtonComponent,
        NavLogoComponent,
        IconsComponent,
        FooterComponent,
        HeroComponent,
        AboutComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
