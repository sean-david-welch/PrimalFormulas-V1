import { Component, Input } from '@angular/core';
import { DeleteButtonService } from './delete-button.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-delete-button',
    templateUrl: './delete-button.component.html',
    styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
    @Input() text!: string;
    @Input() endpoint!: string;
    @Input() id!: string;

    constructor(
        private deleteButtonService: DeleteButtonService,
        private router: Router
    ) {}

    onDelete(): void {
        this.deleteButtonService
            .deleteModel(this.endpoint, this.id)
            .subscribe((response) => {
                console.log(response);
                this.router.navigate(['/products']);
            });
    }
}
