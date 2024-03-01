import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

import { User } from 'src/app/lib/auth/auth.models';
import { constructUrl } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private UserUpdate = new BehaviorSubject<User | null>(null);
    public UserUpdate$ = this.UserUpdate.asObservable();

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(() => new Error('An error occured', error.message));
    }

    public notifyUpdate(user: User): void {
        this.UserUpdate.next(user);
    }

    constructor(private http: HttpClient) {}

    public fetchUsers(): Observable<User[]> {
        const url = constructUrl('users');

        return this.http.get<User[]>(url).pipe(catchError(this.handleError));
    }

    public registerUser(user: User): Observable<User> {
        const url = constructUrl('users');

        return this.http
            .post<User>(url, user, { withCredentials: true })
            .pipe(catchError(this.handleError));
    }

    public updateUser(user: User): Observable<User> {
        const url = constructUrl('users', user.id);

        return this.http
            .put<User>(url, user, { withCredentials: true })
            .pipe(catchError(this.handleError));
    }
}
