import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

import { AboutSection } from './about.models';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    about: AboutSection[] = [];
    isLoading = <boolean>false;

    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.aboutService.getData('about').subscribe((response) => {
            this.about = response;
            this.isLoading = false;
        });
    }
}
