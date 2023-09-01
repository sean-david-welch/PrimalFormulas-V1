import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { User } from 'src/app/lib/auth/auth.models';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
})
export class UserRegisterComponent implements OnChanges {
    @Input() text!: string;
    @Input() mode: 'create' | 'update' = 'create';
    @Input() selectedUser?: User;

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService
    ) {
        this.form = this.formBuilder.group({
            id: [{ value: '', disabled: true }],
            username: ['', Validators.required],
            email: ['', Validators.required],
            full_name: ['', Validators.required],
            disabled: [null],
            is_superuser: [false, Validators.required],
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.selectedUser) this.form.patchValue(this.selectedUser);
    }

    private handleUser(action: 'create' | 'update', user: User): void {
        const apiCall =
            action === 'create'
                ? this.accountService.registerUser(user)
                : this.accountService.updateUser(user);

        apiCall.subscribe({
            next: (response: User) => {
                this.form.reset();
                this.accountService.notifyUpdate(response);
            },
            error: (error: Error) => {
                console.error('error occured', error.message);
            },
        });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            const user: User = this.form.getRawValue();

            if (this.mode === 'create') {
                this.handleUser('create', user);
            } else if (this.mode === 'update') {
                this.handleUser('update', user);
            } else {
                alert('User ID is missing');
            }
        }
    }
}
