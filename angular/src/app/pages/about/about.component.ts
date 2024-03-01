import { Component, OnDestroy, OnInit } from '@angular/core';
import { AboutService } from './about.service';

import { AboutSection } from './about.models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
    public about: AboutSection[] = [];
    public isLoading: boolean = false;

    private aboutSubscription!: Subscription;

    constructor(private aboutService: AboutService) {}

    private getAbouts(): void {
        this.aboutService.fetchAboutSections().subscribe({
            next: (response) => {
                this.about = response;
                this.isLoading = false;
            },
            error: (error: Error) => {
                this.isLoading = false;
                console.log(error.message);
            },
        });
    }

    ngOnInit(): void {
        this.isLoading = true;

        this.getAbouts();

        this.aboutSubscription = this.aboutService.AboutUpdate$.subscribe({
            next: () => {
                this.getAbouts();
            },
        });
    }

    ngOnDestroy(): void {
        this.aboutSubscription.unsubscribe();
    }
}
