import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// NgRx
import { StoreModule } from '@ngrx/store';

//Pages
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Layouts
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { NavListComponent } from './shared/components/layout/navbar/nav-list/nav-list.component';
import { NavLogoComponent } from './shared/components/layout/navbar/nav-list/nav-logo/nav-logo.component';
import { NavbarLinkComponent } from './shared/components/layout/navbar/nav-list/nav-link/nav-link.component';

import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { ToTopButtonComponent } from './shared/components/layout/footer/to-top-button/to-top-button.component';

// Misc
import { NavButtonComponent } from './shared/components/nav-button/nav-button.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { OverlayComponent } from './pages/home/overlay/overlay.component';
import { DisplaysComponent } from './pages/home/displays/displays.component';
import { BenefitItemComponent } from './pages/home/displays/benefit-item/benefit-item.component';
import { IconLinkComponent } from './shared/components/layout/sidebar/icon-link/icon-link.component';

//Directives
import { IntersectionObserverDirective } from './shared/directives/intersection-observer.directive';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { LoginFormComponent } from './pages/account/login-form/login-form.component';
import { CurrentUserComponent } from './pages/account/current-user/current-user.component';
import { AuthDirective } from './lib/auth/auth.directive';
import { DialogComponent } from './shared/components/dialog/dialog.component';

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
        SidebarComponent,
        ProductsComponent,
        ProductDetailComponent,
        AccountComponent,
        CartComponent,
        NotFoundComponent,
        OverlayComponent,
        DisplaysComponent,
        BenefitItemComponent,
        IntersectionObserverDirective,
        IconLinkComponent,
        LoadingSpinnerComponent,
        LoginFormComponent,
        CurrentUserComponent,
        AuthDirective,
        DialogComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
