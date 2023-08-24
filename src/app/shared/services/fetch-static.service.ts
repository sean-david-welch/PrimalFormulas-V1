import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FetchStaticService {
    private baseUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) {}

    fetchStaticContent(name: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/content/${name}`).pipe(
            catchError((error) => {
                const err = new Error(
                    'An error occurred while fetching content'
                );
                return throwError(() => err);
            })
        );
    }
}
