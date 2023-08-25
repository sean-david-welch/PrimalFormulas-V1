import { Component, OnInit } from '@angular/core';
import { fetchData } from './about.service';

import { AboutSection } from './about.models';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    about: AboutSection[] = [];
    isLoading = true;

    constructor(private fetchData: fetchData) {}

    ngOnInit(): void {
        this.fetchData.getData('about').subscribe((response) => {
            this.about = response;
            this.isLoading = false;
        });
    }
}
