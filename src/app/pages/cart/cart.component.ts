import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getCartItems } from 'src/app/lib/store/cart/cart.selectors';
import { CartProduct, CartState } from 'src/app/lib/store/cart/cart.reducers';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cartItems$: Observable<CartProduct[]>;

    constructor(private store: Store) {
        this.cartItems$ = this.store
            .select(getCartItems)
            .pipe(map((state: CartState) => state.cart));
    }
}
