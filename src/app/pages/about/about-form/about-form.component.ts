import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../about.service';
import { AboutSection } from '../about.models';

@Component({
    selector: 'app-about-form',
    templateUrl: './about-form.component.html',
})
export class AboutFormComponent implements OnChanges {
    @Input() text!: string;
    @Input() mode: 'create' | 'update' = 'create';
    @Input() selectedModel?: AboutSection;

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private aboutService: AboutService
    ) {
        this.form = this.formBuilder.group({
            id: [{ value: '', disabled: true }],
            title: ['', Validators.required],
            description: ['', Validators.required],
            image: ['', Validators.required],
        });
    }

    ngOnChanges(): void {
        if (this.selectedModel) {
            this.form.patchValue(this.selectedModel);
        }
    }

    private handleModel(
        action: 'create' | 'update',
        model: AboutSection
    ): void {
        const apiCall =
            action === 'create'
                ? this.aboutService.createAboutSection(model)
                : this.aboutService.updateAboutSection(model);

        apiCall.subscribe({
            next: (response: AboutSection) => {
                this.form.reset();
                this.aboutService.notifyAboutAdded(response);
            },
            error: (error: Error) => {
                console.error('error occured', error.message);
            },
        });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            const about: AboutSection = this.form.getRawValue();

            if (this.mode === 'create') {
                this.handleModel('create', about);
            } else if (this.mode === 'update') {
                this.handleModel('update', about);
            } else {
                alert('About ID is missing');
            }
        }
    }
}
