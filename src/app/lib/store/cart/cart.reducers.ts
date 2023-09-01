import { Action, createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from './cart.actions';
import { Product } from 'src/app/pages/products/products.models';

export interface CartState {
    cart: Product[];
}

let initialCartData: Product[] = [];

try {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
        initialCartData = JSON.parse(cartFromStorage);
    }
} catch (error) {
    console.error('Error parsing cart data from local storage:', error);
    localStorage.clear();
    localStorage.removeItem('cart');
}

export const initialCart: CartState = {
    cart: initialCartData,
};

const cartReducerInternal = createReducer(
    initialCart,
    on(addProduct, (state, { product }) => {
        if (!product.id || !product.name || product.price <= 0) return state;
        return { ...state, cart: [...state.cart, product] };
    }),
    on(removeProduct, (state, { productId }) => {
        return {
            ...state,
            cart: state.cart.filter(
                (product) => product.id !== productId && product.id
            ),
        };
    })
);

export function cartReducer(state: CartState | undefined, action: Action) {
    const newState = cartReducerInternal(state, action);
    localStorage.setItem('cart', JSON.stringify(newState.cart));
    return newState;
}
