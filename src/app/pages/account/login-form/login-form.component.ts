import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
    form: FormGroup;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.authService
                .login('login', this.form.value)
                .subscribe((response) => {});
        }
    }
}
