import { User } from 'src/app/lib/auth/auth.models';
import { Observable, Subscription } from 'rxjs';
import { AccountService } from '../account.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = [];
    isLoading: boolean = false;

    private userSubscription: Subscription = new Subscription();

    public displayedFields = ['username', 'email', 'full_name', 'is_superuser'];

    public filterAndOrderFields(user: any): any[] {
        return this.displayedFields.map((field) => ({
            key: field.charAt(0).toUpperCase() + field.slice(1),
            value: user[field as keyof User],
        }));
    }

    constructor(private accountService: AccountService) {}

    private getUsers(): void {
        this.accountService.fetchUsers().subscribe({
            next: (response) => {
                this.users = response;
                this.isLoading = false;
            },
            error: (error: Error) => {
                this.isLoading = false;
                console.error(error.message);
            },
        });
    }

    ngOnInit(): void {
        this.isLoading = true;

        this.getUsers();

        this.userSubscription = this.accountService.UserUpdate$.subscribe(
            (newUser) => {
                if (newUser) {
                    this.getUsers();
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
