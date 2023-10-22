import { Component, Input, OnInit } from '@angular/core';

import { StaticService } from 'src/app/shared/services/static.service';
import { Static } from 'src/app/shared/types/static.models';

@Component({
    selector: 'app-nav-logo',
    templateUrl: './nav-logo.component.html',
    styleUrls: ['./nav-logo.component.css'],
})
export class NavLogoComponent implements OnInit {
    @Input() logoWidth?: number = 112;
    @Input() logoHeight?: number = 112;

    data: Static = {
        name: '',
        content: '',
    };
    isLoading = <boolean>false;

    constructor(private staticService: StaticService) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.staticService.fetchStaticContent('Logo').subscribe((response) => {
            this.data = response;
            this.isLoading = false;
        });
    }
}
