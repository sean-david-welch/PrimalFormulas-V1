import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AboutSection } from './about.models';
import { api_base_url } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    private contructUrl(endpoint: string): string {
        return `${api_base_url}/${endpoint}`;
    }

    constructor(private http: HttpClient) {}

    getData(endpoint: string): Observable<AboutSection[]> {
        const url = this.contructUrl(endpoint);
        return this.http.get<AboutSection[]>(url).pipe(
            catchError((error) => {
                console.error('Failed to fetch about models', error);
                return throwError(
                    () =>
                        new Error(
                            'An error occured while fetching the content',
                            error.message
                        )
                );
            })
        );
    }
}
