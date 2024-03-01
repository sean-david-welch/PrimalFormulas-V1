import { Component, OnInit } from '@angular/core';
import { StaticService } from 'src/app/shared/services/static.service';

import { Static } from 'src/app/shared/types/static.models';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
    data: Static = { name: '', content: '' };
    isLoading = <boolean>false;

    constructor(private staticService: StaticService) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.staticService.fetchStaticContent('Hero').subscribe((response) => {
            this.data = response;
            this.isLoading = false;
        });
    }
}
