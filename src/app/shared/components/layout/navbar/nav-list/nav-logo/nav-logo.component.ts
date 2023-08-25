import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav-logo',
    templateUrl: './nav-logo.component.html',
    styleUrls: ['./nav-logo.component.css'],
})
export class NavLogoComponent {
    @Input() logoWidth?: number = 112;
    @Input() logoHeight?: number = 112;

    logo = 'https://d3o4nf60ihcs04.cloudfront.net/images/logo.png';
}
