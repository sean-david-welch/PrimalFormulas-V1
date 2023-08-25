import { Component } from '@angular/core';
import {
    faShieldVirus,
    faFire,
    faAtom,
    faHammer,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-displays',
    templateUrl: './displays.component.html',
    styleUrls: ['./displays.component.css'],
})
export class DisplaysComponent {
    benefits = [
        {
            icon: faShieldVirus,
            title: 'Increased Immune Function',
            description:
                "Boost your immune system and defend against illnesses with our desiccated organ supplements. Strengthen your body's natural defense mechanism.",
        },
        {
            icon: faFire,
            title: 'Increased Energy Levels',
            description:
                'Experience a natural energy boost throughout the day. Our desiccated organ supplements provide essential nutrients to fuel your body and enhance vitality.',
        },
        {
            icon: faAtom,
            title: 'Helps Autoimmune Issues',
            description:
                'Find relief and support for autoimmune conditions. Our desiccated organ supplements aid in managing symptoms and promoting overall well-being.',
        },
        {
            icon: faHammer,
            title: 'Faster Recovery',
            description:
                "Enhance your body's recovery process after physical exertion. Our desiccated organ supplements assist in faster healing and rejuvenation.",
        },
    ];
}
