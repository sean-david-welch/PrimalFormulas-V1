import { Component, Input } from '@angular/core';
import {
    IconDefinition,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-benefit-item',
    templateUrl: './benefit-item.component.html',
    styleUrls: ['./benefit-item.component.css'],
})
export class BenefitItemComponent {
    @Input() icon: IconDefinition = faRightFromBracket;
    @Input() title?: string;
    @Input() description?: string;
}
