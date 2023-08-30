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
            name: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            image: ['', Validators.required],
        });
    }

    ngOnChanges(): void {
        if (this.selectedProduct) {
            this.form.patchValue({
                name: this.selectedProduct.name,
                description: this.selectedProduct.description,
                price: this.selectedProduct.price,
                image: this.selectedProduct.image,
            });
        }
    }

    private createProduct(product: Product): void {
        this.productsService.createProduct('products', product).subscribe({
            next: (response: Product) => {
                this.form.reset();
                this.productsService.notifyProductAdded(response);
            },
            error: (error: Error) => {
                console.error('Error occurred:', error.message);
            },
        });
    }

    private updateProduct(product: Product, productId: string): void {
        this.productsService
            .updateProduct('products', product, productId)
            .subscribe({
                next: (response: Product) => {
                    this.form.reset();
                    this.productsService.notifyProductAdded(response);
                },
                error: (error: Error) => {
                    console.error('Error occurred:', error.message);
                },
            });
    }

    public onSubmit(): void {
        if (this.form.valid) {
            const product: Product = this.form.value;
            if (this.mode === 'create') {
                this.createProduct(product);
            } else if (this.mode === 'update') {
                this.updateProduct(product, product.id);
            }
        }
    }
}
