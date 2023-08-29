import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs';

import { User } from 'src/app/shared/auth/auth.models';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
    selector: 'app-current-user',
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
    @Output() logoutEvent = new EventEmitter<void>();

    user: User = {
        id: '',
        username: '',
        email: '',
        full_name: '',
        disabled: false,
        is_superuser: false,
    };

    logout(): void {
        this.authService
            .logout('logout')
            .pipe(
                catchError((err) => {
                    return [];
                })
            )
            .subscribe((response) => {
                this.logoutEvent.emit();
            });
    }

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService
            .getCurrentUser('current-user')
            .subscribe((response: User) => {
                console.log(response);
                this.user = response;
            });
    }
}
