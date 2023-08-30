import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, catchError } from 'rxjs';

import { User } from 'src/app/lib/auth/auth.models';
import { AuthService } from 'src/app/lib/auth/auth.service';
import { storeUser } from 'src/app/lib/store/user/user.actions';
import { selectUser } from 'src/app/lib/store/user/user.selectors';

@Component({
    selector: 'app-current-user',
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
    @Output() logoutEvent = new EventEmitter<void>();

    user$: Observable<User>;

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

    constructor(private authService: AuthService, private store: Store) {
        this.user$ = this.store.select(selectUser);
    }

    ngOnInit(): void {
        this.authService
            .getCurrentUser('current-user')
            .subscribe((response: User) => {
                if (response.username) {
                    this.store.dispatch(storeUser({ user: response }));
                }
            });
    }
}
