import { createAction, props } from '@ngrx/store';
import { ShippingDetails } from 'src/app/shared/types/customer.models';

export const storeCustomer = createAction(
    'ADD_CUSTOMER_TO_STATE',
    props<{ shippingDetails: ShippingDetails }>()
);

export const removeCustomer = createAction(
    'REMOVE_CUSTOMER_FROM_STATE',
    props<{ customerName: string }>()
);
