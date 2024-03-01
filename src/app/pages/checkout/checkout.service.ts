import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStripe } from '@stripe/stripe-js';
import { stripe_publishable_key } from 'src/app/shared/utils/config';
import { CheckoutDetails } from './checkout.models';

@Injectable({
    providedIn: 'root',
})
export class CheckoutService {
    public stripe = loadStripe(stripe_publishable_key);

    constructor(
        private http: HttpClient,
        private store: Store<CheckoutDetails>
    ) {}

    async createPaymentIntent() {
        const cart = this.store.select((state) => state.cart);
        const shippingDetails = this.store.select(
            (state) => state.shippingDetails
        );

        const payload = {
            cart,
            customer: shippingDetails,
            receipt_email: shippingDetails,
        };

        const res = await this.http.post('/api/create-payment-intent', payload);
    }

    // async initializePaymentIntent(items): Promise<string> {
    //     const response = await this.http
    //         .post<{ clientSecret: string }>('/create-payment-intent', { items })
    //         .toPromise();
    //     return response.clientSecret;
    // }
}
