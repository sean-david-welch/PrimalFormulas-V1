import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Static } from '../types/static.models';
import { api_base_url } from '../utils/config';

@Injectable({
    providedIn: 'root',
})
export class StaticService {
    private baseUrl = api_base_url;

    constructor(private http: HttpClient) {}

    fetchStaticContent(name: string): Observable<Static> {
        return this.http.get<Static>(`${this.baseUrl}/content/${name}`).pipe(
            catchError((error) => {
                console.error('API call failed', error);
                return throwError(
                    () => new Error('An error occurred while fetching content')
                );
            })
        );
    }
}
