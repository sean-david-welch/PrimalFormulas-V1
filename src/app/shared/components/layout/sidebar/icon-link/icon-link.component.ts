import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { iconLinkIcons } from './icon-link.constants';

@Component({
    selector: 'app-icon-link',
    templateUrl: './icon-link.component.html',
    styleUrls: ['./icon-link.component.css'],
})
export class IconLinkComponent {
    @Input() iconName: string = '';
    @Input() link: string = '/';

    @Output() iconClick = new EventEmitter<void>();

    get icon(): IconDefinition {
        return iconLinkIcons[this.iconName] || faArrowRight;
    }

    onIconClick() {
        this.iconClick.emit();
    }
}
