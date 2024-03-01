import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducers';

export const selectCustomerState =
    createFeatureSelector<CustomerState>('customer');

export const selectCustomer = createSelector(
    selectCustomerState,
    (state: CustomerState) => state.shippingDetails
);
