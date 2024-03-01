import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

import { AboutSection } from './about.models';
import { constructUrl } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    private AboutUpdate = new BehaviorSubject<AboutSection | null>(null);
    public AboutUpdate$ = this.AboutUpdate.asObservable();

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(() => new Error('An error occurred', error.message));
    }

    public notifyAboutAdded(about: AboutSection): void {
        this.AboutUpdate.next(about);
    }

    constructor(private http: HttpClient) {}

    public fetchAboutSections(): Observable<AboutSection[]> {
        const url = constructUrl('about');

        return this.http
            .get<AboutSection[]>(url)
            .pipe(catchError(this.handleError));
    }

    public createAboutSection(
        aboutModel: AboutSection
    ): Observable<AboutSection> {
        const url = constructUrl('about');

        return this.http
            .post<AboutSection>(url, aboutModel, {
                withCredentials: true,
            })
            .pipe(catchError(this.handleError));
    }

    public updateAboutSection(
        aboutModel: AboutSection
    ): Observable<AboutSection> {
        const url = constructUrl('about', aboutModel.id);

        return this.http
            .put<AboutSection>(url, aboutModel, { withCredentials: true })
            .pipe(catchError(this.handleError));
    }
}
