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
import { FooterComponent } from './layout/footer/footer.component';

// Misc
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavLogoComponent } from './components/nav-logo/nav-logo.component';
import { IconsComponent } from './components/icons/icons.component';
import { HeroComponent } from './components/hero/hero.component';

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
        HomeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
