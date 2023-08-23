import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    isHomePage: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.isHomePage =
                    event.urlAfterRedirects === '/' ||
                    event.urlAfterRedirects === '';
            }
        });
    }
}
