import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api_base_url } from '../../utils/config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DeleteButtonService {
    private constructUrl(endpoint: string, params: string): string {
        return `${api_base_url}/${endpoint}/${params}`;
    }

    constructor(private http: HttpClient) {}

    public deleteModel(endpoint: string, modelId: string): Observable<any> {
        const url = this.constructUrl(endpoint, modelId);

        return this.http.delete<any>(url);
    }
}
