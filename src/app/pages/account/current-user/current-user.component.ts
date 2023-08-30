import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, catchError } from 'rxjs';

import { User } from 'src/app/lib/auth/auth.models';
import { AuthService } from 'src/app/lib/auth/auth.service';
import { removeUser, storeUser } from 'src/app/lib/store/user/user.actions';
import { selectUser } from 'src/app/lib/store/user/user.selectors';

@Component({
    selector: 'app-current-user',
    templateUrl: './current-user.component.html',
    styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
    user$: Observable<User>;

    @Output() logoutEvent = new EventEmitter<void>();

    constructor(private authService: AuthService, private store: Store) {
        this.user$ = this.store.select(selectUser);
    }

    logout(): void {
        this.authService
            .logout('logout')
            .pipe(
                catchError((error: Error) => {
                    throw new Error(error.message);
                })
            )
            .subscribe((response) => {
                if (response.status === 200) {
                    this.store.dispatch(removeUser());
                }
                this.logoutEvent.emit();
            });
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
