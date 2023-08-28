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
    private constructUrl(name: string): string {
        return `${api_base_url}/content/${name}`;
    }

    constructor(private http: HttpClient) {}

    fetchStaticContent(name: string): Observable<Static> {
        const url = this.constructUrl(name);
        return this.http.get<Static>(url).pipe(
            catchError((error) => {
                console.error('API call failed', error);
                return throwError(
                    () => new Error('An error occurred while fetching content')
                );
            })
        );
    }
}
