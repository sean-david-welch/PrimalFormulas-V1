import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { api_base_url } from '../utils/config';
import { AuthStatus } from './auth.models';

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
        return this.http.get<AuthStatus>(url);
    }
}
