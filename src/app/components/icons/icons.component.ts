import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { icons } from './incons.constants';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
    @Input() iconName: string = '';
    get icon(): IconDefinition {
        return icons[this.iconName] || faArrowRight;
    }
}
