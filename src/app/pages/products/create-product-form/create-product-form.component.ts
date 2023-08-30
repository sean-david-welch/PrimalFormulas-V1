import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../products.models';

@Component({
    selector: 'app-create-product-form',
    templateUrl: './create-product-form.component.html',
    styleUrls: ['./create-product-form.component.css'],
})
export class CreateProductFormComponent {
    @Input() text!: string;

    form: FormGroup;

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

    onSubmit(): void {
        if (this.form.valid) {
            const product: Product = this.form.value;
            this.productsService.createProduct('products', product).subscribe(
                (response: Product) => {
                    this.form.reset();
                    this.productsService.notifyProductAdded(response);
                },
                (error: Error) => {
                    console.error('Error occurred:', error.message);
                }
            );
        }
    }
}
