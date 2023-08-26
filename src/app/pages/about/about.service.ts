import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AboutSection } from './about.models';
import { api_base_url } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    baseUrl = api_base_url;

    constructor(private http: HttpClient) {}

    getData(endpoint: string): Observable<AboutSection[]> {
        return this.http
            .get<AboutSection[]>(`${this.baseUrl}/${endpoint}`)
            .pipe(
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
