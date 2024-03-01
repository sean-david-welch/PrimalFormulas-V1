import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { icons } from './nav-button.constants';

@Component({
    selector: 'app-nav-button',
    templateUrl: './nav-button.component.html',
    styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent {
    @Input() text: string = '';
    @Input() iconName: string = '';

    @Input() link?: string = '';
    @Input() buttonType?: string;
    @Input() formMethod?: string;

    @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

    get icon(): IconDefinition {
        return icons[this.iconName] || faArrowRight;
    }
}
