import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { api_base_url } from 'src/app/shared/utils/config';
import { AuthStatus, AuthResponse, Credentials, User } from './auth.models';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private constructUrl(endpoint: string): string {
        return `${api_base_url}/${endpoint}`;
    }

    constructor(private http: HttpClient) {}

    getAuthStatus(endpoint: string): Observable<AuthStatus> {
        const url = this.constructUrl(endpoint);
        return this.http.get<AuthStatus>(url, { withCredentials: true });
    }

    getCurrentUser(endpoint: string): Observable<User> {
        const url = this.constructUrl(endpoint);
        return this.http.get<User>(url, { withCredentials: true });
    }

    login(
        endpoint: string,
        credentials: Credentials
    ): Observable<AuthResponse> {
        const url = this.constructUrl(endpoint);
        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        let body = new HttpParams();
        body = body.set('username', credentials.username);
        body = body.set('password', credentials.password);

        return this.http.post<AuthResponse>(url, body.toString(), {
            headers,
            withCredentials: true,
        });
    }

    logout(endpoint: string): Observable<any> {
        const url = this.constructUrl(endpoint);
        return this.http.post<any>(url, null, { withCredentials: true });
    }
}
