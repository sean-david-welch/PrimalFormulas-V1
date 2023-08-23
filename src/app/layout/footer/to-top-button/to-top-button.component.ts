import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-to-top-button',
    templateUrl: './to-top-button.component.html',
    styleUrls: ['./to-top-button.component.css'],
})
export class ToTopButtonComponent {
    faChevron = faChevronUp;

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
