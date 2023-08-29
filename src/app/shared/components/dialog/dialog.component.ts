import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
    faX: IconDefinition = faX;
    showForm: boolean = false;

    @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

    private updateDialogState() {
        const dialogElement = this.dialog.nativeElement;
        if (this.showForm) {
            dialogElement.showModal();
            dialogElement.classList.add('dialog-visible');
        } else {
            dialogElement.close();
            dialogElement.classList.remove('dialog-visible');
        }
    }

    toggleDialog() {
        this.showForm = !this.showForm;
        this.updateDialogState();
    }

    closeDialog() {
        this.showForm = false;
        this.updateDialogState();
    }
}
