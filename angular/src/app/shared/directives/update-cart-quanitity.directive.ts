import { Directive, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateProductQuantity } from 'src/app/lib/store/cart/cart.actions';

@Directive({
    selector: '[appUpdateCartQuantity]',
})
export class UpdateCartQuanitityDirective {
    @Input('appUpdateCartQuantity') productId!: string;

    constructor(private store: Store) {}

    @HostListener('input', ['$event'])
    handleInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const newQuantity = parseInt(inputElement.value, 10);
        this.store.dispatch(
            updateProductQuantity({ productId: this.productId, newQuantity })
        );
    }
}
