import { Component } from '@angular/core';
import {
    faTwitter,
    faFacebook,
    faYoutube,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    twitter = faTwitter;
    facebook = faFacebook;
    youtube = faYoutube;
    instagram = faInstagram;
}
