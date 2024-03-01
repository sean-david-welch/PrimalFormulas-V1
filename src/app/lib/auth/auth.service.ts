import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { api_base_url } from 'src/app/shared/utils/config';
import { AuthStatus, AuthResponse, Credentials, User } from './auth.models';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private constructUrl(endpoint: string): string {
        return `${api_base_url}/${endpoint}`;
    }

    private authOptions = { withCredentials: true };

    constructor(private http: HttpClient) {}

    private getAuth<T>(endpoint: string): Observable<T> {
        const url = this.constructUrl(endpoint);

        return this.http.get<T>(url, this.authOptions).pipe(
            catchError((error: Error) => {
                console.error('Api call failed', error.message);
                return throwError(() => new Error('An Error Occured'));
            })
        );
    }

    getAuthStatus(): Observable<AuthStatus> {
        return this.getAuth<AuthStatus>('is-authenticated');
    }

    getCurrentUser(): Observable<User> {
        return this.getAuth<User>('current-user');
    }

    login(
        endpoint: string,
        credentials: Credentials
    ): Observable<AuthResponse> {
        const url = this.constructUrl(endpoint);

        let body = new HttpParams();
        body = body.set('username', credentials.username);
        body = body.set('password', credentials.password);

        return this.http.post<AuthResponse>(url, body.toString(), {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            ),
            ...this.authOptions,
        });
    }

    logout(endpoint: string): Observable<void> {
        const url = this.constructUrl(endpoint);
        return this.http.post<void>(url, null, { withCredentials: true });
    }
}
