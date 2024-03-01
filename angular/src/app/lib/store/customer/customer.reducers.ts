import { Action, createReducer, on } from '@ngrx/store';
import { storeCustomer, removeCustomer } from './customer.actions';

import { ShippingDetails } from 'src/app/shared/types/customer.models';

export interface CustomerState {
    shippingDetails: ShippingDetails;
}

const initialCustomer: CustomerState = {
    shippingDetails: {
        customer: {
            address: {
                city: '',
                country: '',
                line1: '',
                postal_code: '',
                state: '',
            },
            name: '',
        },
        email: {
            receipt_email: '',
        },
    },
};

const customerReducerInternal = createReducer(
    initialCustomer,
    on(storeCustomer, (state, { shippingDetails }) => ({
        ...state,
        shippingDetails,
    })),

    on(removeCustomer, (state) => ({
        ...state,
        shippingDetails: initialCustomer.shippingDetails,
    }))
);

export function cutomerReducer(
    state: CustomerState | undefined,
    action: Action
) {
    return customerReducerInternal(state, action);
}
