import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Pages
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Layouts
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavListComponent } from './layout/navbar/nav-list/nav-list.component';
import { NavLogoComponent } from './layout/navbar/nav-list/nav-logo/nav-logo.component';
import { NavbarLinkComponent } from './layout/navbar/nav-list/navbar-link/navbar-link.component';

import { FooterComponent } from './layout/footer/footer.component';
import { ToTopButtonComponent } from './layout/footer/to-top-button/to-top-button.component';

// Misc
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        NavListComponent,
        NavButtonComponent,
        NavLogoComponent,
        FooterComponent,
        HeroComponent,
        AboutComponent,
        HomeComponent,
        ToTopButtonComponent,
        NavbarLinkComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
