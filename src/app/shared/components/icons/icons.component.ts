import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { icons } from './icons.constants';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styles: [],
})
export class IconsComponent {
    @Input() iconName: string = '';

    get icon(): IconDefinition {
        return icons[this.iconName] || faArrowRight;
    }
}
