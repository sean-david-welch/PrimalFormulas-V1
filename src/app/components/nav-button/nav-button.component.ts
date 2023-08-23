import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { icons } from './icons.constants';

@Component({
    selector: 'app-nav-button',
    templateUrl: './nav-button.component.html',
    styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent {
    @Input() link: string = '/';
    @Input() text: string = '';
    @Input() iconName: string = '';

    get icon(): IconDefinition {
        return icons[this.iconName] || faArrowRight;
    }
}
