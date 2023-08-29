import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

import { AuthStatus } from 'src/app/shared/auth/auth.models';
import { AuthService } from 'src/app/shared/auth/auth.service';

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

    logout(): void {
        this.authService
            .logout('logout')
            .pipe(
                catchError((err) => {
                    return [];
                })
            )
            .subscribe((response) => {
                this.isLoggedIn = false;
            });
    }

    ngOnInit(): void {
        this.authService
            .getAuthStatus('is-authenticated')
            .subscribe((response: AuthStatus) => {
                this.isLoggedIn = response.is_authenticated;
            });
    }
}
