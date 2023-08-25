import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { navbarLinkIcons } from './nav-link.constants';

@Component({
    selector: 'app-nav-link',
    templateUrl: './nav-link.component.html',
    styleUrls: ['./nav-link.component.css'],
})
export class NavbarLinkComponent {
    @Input() iconName: string = '';
    @Input() link: string = '/';

    get icon(): IconDefinition {
        return navbarLinkIcons[this.iconName] || faArrowRight;
    }
}
