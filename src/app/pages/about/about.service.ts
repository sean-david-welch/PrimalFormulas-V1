import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AboutSection } from './about.models';
import { api_base_url } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    baseUrl = api_base_url;

    constructor(private httpClient: HttpClient) {}

    getData(endpoint: string): Observable<AboutSection[]> {
        return this.httpClient.get<AboutSection[]>(
            `${this.baseUrl}/${endpoint}`
        );
    }
}
