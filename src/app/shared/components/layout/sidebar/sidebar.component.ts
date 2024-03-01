import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
    faBars = faBars;
    faX = faX;

    constructor(public sidebarService: SidebarService) {}
}
