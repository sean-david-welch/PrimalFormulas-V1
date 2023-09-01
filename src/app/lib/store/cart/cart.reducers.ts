import { Action, createReducer, on } from '@ngrx/store';
import {
    addProduct,
    removeProduct,
    updateProductQuantity,
} from './cart.actions';
import { Product } from 'src/app/pages/products/products.models';

export interface CartProduct extends Product {
    quantity: number;
}

export interface CartState {
    cart: CartProduct[];
}

let initialCartData: CartProduct[] = [];

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
    cart: initialCartData.map((product) => ({ ...product, quantity: 1 })),
};

const cartReducerInternal = createReducer(
    initialCart,
    on(addProduct, (state, { product }) => {
        const existingProduct = state.cart.find(
            (cartItem) => cartItem.id === product.id
        );
        if (existingProduct) {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                ),
            };
        } else {
            return {
                ...state,
                cart: [...state.cart, { ...product, quantity: 1 }],
            };
        }
    }),

    on(updateProductQuantity, (state, { productId, newQuantity }) => {
        return {
            ...state,
            cart: state.cart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            ),
        };
    }),

    on(removeProduct, (state, { productId }) => {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== productId),
        };
    })
);

export function cartReducer(state: CartState | undefined, action: Action) {
    const newState = cartReducerInternal(state, action);
    localStorage.setItem('cart', JSON.stringify(newState.cart));
    return newState;
}
