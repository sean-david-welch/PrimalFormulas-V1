import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../products.models';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class CreateProductFormComponent implements OnChanges {
    @Input() text!: string;
    @Input() mode: 'create' | 'update' = 'create';
    @Input() selectedProduct?: Product;

    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private productsService: ProductsService
    ) {
        this.form = this.formBuilder.group({
            id: [{ value: '', disabled: true }],
            name: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            image: ['', Validators.required],
        });
    }

    ngOnChanges(): void {
        if (this.selectedProduct) {
            this.form.patchValue(this.selectedProduct);
        }
    }

    private handleProduct(
        action: 'create' | 'update',
        product: Product,
        id?: string
    ): void {
        const apiCall =
            action === 'create'
                ? this.productsService.createProduct('products', product)
                : this.productsService.updateProduct('products', product, id!);

        apiCall.subscribe({
            next: (response: Product) => {
                this.form.reset();
                this.productsService.notifyProductAdded(response);
            },
            error: (error: Error) =>
                console.error('Error occurred:', error.message),
        });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            const product: Product = this.form.getRawValue();
            if (this.mode === 'create') {
                this.handleProduct('create', product);
            } else if (this.mode === 'update' && product.id) {
                this.handleProduct('update', product, product.id);
            } else {
                alert('Product ID is missing');
            }
        }
    }
}
