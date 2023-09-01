import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getCartItems } from 'src/app/lib/store/cart/cart.selectors';
import { CartState } from 'src/app/lib/store/cart/cart.reducers';
import { Product } from '../products/products.models';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cartItems$: Observable<Product[]>;

    constructor(private store: Store) {
        this.cartItems$ = this.store
            .select(getCartItems)
            .pipe(map((state: CartState) => state.cart));
    }
}
