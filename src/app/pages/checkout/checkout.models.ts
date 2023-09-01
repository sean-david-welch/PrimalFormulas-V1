import { CartProduct } from 'src/app/lib/store/cart/cart.reducers';
import { ShippingDetails } from 'src/app/shared/types/customer.models';

export interface CheckoutDetails {
    cart: CartProduct[];
    shippingDetails: ShippingDetails;
}
