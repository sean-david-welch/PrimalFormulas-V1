import { Directive, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from 'src/app/lib/store/cart/cart.actions';
import { Product } from 'src/app/pages/products/products.models';

@Directive({
    selector: '[appAddToCart], [appRemoveFrom]',
})
export class AddToCartDirective {
    @Input() product: Product = {
        id: '',
        name: '',
        description: '',
        price: 0,
        image: '',
    };

    constructor(private store: Store) {}

    @HostListener('click') handleClick() {
        this.store.dispatch(addProduct({ product: this.product }));
    }
}
