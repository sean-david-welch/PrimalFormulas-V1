import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { navbarLinkIcons } from './navbar-link.constants';

@Component({
    selector: 'app-navbar-link',
    templateUrl: './navbar-link.component.html',
    styleUrls: ['./navbar-link.component.css'],
})
export class NavbarLinkComponent {
    @Input() iconName: string = '';
    @Input() link: string = '/';

    get icon(): IconDefinition {
        return navbarLinkIcons[this.iconName] || faArrowRight;
    }
}
