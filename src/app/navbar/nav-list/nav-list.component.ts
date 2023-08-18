import { Component, Input } from '@angular/core';
import { User, Supplier } from './nav-list.models';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.css'],
})
export class NavListComponent {
    @Input() user?: User | null;
    @Input() suppliers?: Supplier[];
}
