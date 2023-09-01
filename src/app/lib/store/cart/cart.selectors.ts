import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';

const getCartState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(getCartState, (state) => state);
