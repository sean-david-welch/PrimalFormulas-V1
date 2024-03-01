import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/pages/products/products.models';

export const addProduct = createAction(
    'ADD_PRODUCT_TO_CART',
    props<{ product: Product }>()
);

export const updateProductQuantity = createAction(
    'UPDATE_PRODUCT_QUANTITY',
    props<{ productId: string; newQuantity: number }>()
);

export const removeProduct = createAction(
    'REMOVE_PRODUCT_FROM_CART',
    props<{ productId: string }>()
);
