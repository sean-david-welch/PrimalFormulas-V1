import { Component, Input } from '@angular/core';
import { DeleteButtonService } from './delete-button.service';

@Component({
    selector: 'app-delete-button',
    templateUrl: './delete-button.component.html',
    styleUrls: ['./delete-button.component.css'],
})
export class DeleteButtonComponent {
    @Input() text!: string;
    @Input() endpoint!: string;
    @Input() id!: string;

    constructor(private deleteButtonService: DeleteButtonService) {}

    onDelete(): void {
        this.deleteButtonService
            .deleteModel(this.endpoint, this.id)
            .subscribe((response) => {
                console.log(response);
                window.location.reload();
            });
    }
}
