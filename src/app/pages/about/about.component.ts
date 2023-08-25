import { Component, OnInit } from '@angular/core';
import { fetchData } from './fetch-about.service';

import { AboutSection } from './about.models';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    about: AboutSection[] = [];

    constructor(private fetchData: fetchData) {}

    ngOnInit(): void {
        this.fetchData.getData('about').subscribe((response) => {
            this.about = response;
        });
    }
}
