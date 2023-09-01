import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    Email,
    Customer,
    ShippingDetails,
} from 'src/app/shared/types/customer.models';
import { storeCustomer } from 'src/app/lib/store/customer/customer.actions';
import { selectCustomer } from 'src/app/lib/store/customer/customer.selectors';

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
    shippingDetails$: Observable<ShippingDetails>;

    public form: FormGroup;

    constructor(private store: Store, private formBuilder: FormBuilder) {
        this.shippingDetails$ = this.store.select(selectCustomer);

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            line1: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            postal_code: ['', Validators.required],
            country: ['', Validators.required],
            email: ['', Validators.required],
        });
    }

    onSubmit() {
        const formValue = this.form.value;
        const updatedCustomer: Customer = {
            name: formValue.name,
            address: {
                line1: formValue.line1,
                city: formValue.city,
                state: formValue.state,
                postal_code: formValue.postal_code,
                country: formValue.country,
            },
        };

        const email: Email = {
            receipt_email: formValue.email,
        };

        const shippingDetails: ShippingDetails = {
            customer: updatedCustomer,
            email: email,
        };

        this.store.dispatch(storeCustomer({ shippingDetails }));
    }
}
