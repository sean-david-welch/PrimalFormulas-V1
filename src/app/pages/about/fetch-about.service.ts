import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AboutSection } from './about.models';

@Injectable({
    providedIn: 'root',
})
export class fetchData {
    private baseUrl = 'http://127.0.0.1:8000/api';

    constructor(private httpClient: HttpClient) {}

    getData(endpoint: string): Observable<AboutSection[]> {
        return this.httpClient.get<AboutSection[]>(
            `${this.baseUrl}/${endpoint}`
        );
    }
}
