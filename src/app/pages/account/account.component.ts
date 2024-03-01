import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

import { AuthStatus } from 'src/app/lib/auth/auth.models';
import { AuthService } from 'src/app/lib/auth/auth.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
    isLoggedIn: boolean = false;

    constructor(private authService: AuthService) {}

    handleLoginSuccess(): void {
        this.isLoggedIn = true;
    }

    handleLogoutSuccess(): void {
        this.isLoggedIn = false;
    }

    ngOnInit(): void {
        this.authService.getAuthStatus().subscribe((response: AuthStatus) => {
            this.isLoggedIn = response.is_authenticated;
        });
    }
}
