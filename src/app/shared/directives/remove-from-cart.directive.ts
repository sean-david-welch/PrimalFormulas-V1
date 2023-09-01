import { Directive, Input, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeProduct } from '../../lib/store/cart/cart.actions';

@Directive({
    selector: '[appRemoveFromCart]',
})
export class RemoveFromCartDirective {
    @Input() productId!: string;

    constructor(private store: Store) {}

    @HostListener('click')
    onClick() {
        if (this.productId) {
            this.store.dispatch(removeProduct({ productId: this.productId }));
        }
    }
}
