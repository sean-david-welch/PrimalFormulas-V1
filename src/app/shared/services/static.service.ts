import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { Static } from '../types/static.models';
import { api_base_url } from '../utils/config';

@Injectable({
    providedIn: 'root',
})
export class StaticService {
    private constructUrl(name: string): string {
        return `${api_base_url}/content/${name}`;
    }

    private cache: Record<string, Observable<Static>> = {};

    constructor(private http: HttpClient) {}

    fetchStaticContent(name: string): Observable<Static> {
        if (!this.cache[name]) {
            const url = this.constructUrl(name);

            this.cache[name] = this.http.get<Static>(url).pipe(
                shareReplay(1),

                catchError((error) => {
                    console.error('API call failed', error);
                    return throwError(() => new Error('Fetch Failed'));
                })
            );
        }
        return this.cache[name];
    }
}
