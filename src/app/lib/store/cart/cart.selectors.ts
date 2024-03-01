import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';

const getCartState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(getCartState, (state) => state);

export const getCartSubtotal = createSelector(getCartItems, (cartState) => {
    return cartState.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
});
