import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products.models';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
    product: Product = {
        id: '',
        name: '',
        description: '',
        price: 0,
        image: '',
    };
    isLoading: boolean = false;

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.route.params.subscribe((params) => {
            const id = params['id'];
            this.productsService.fetchSingleProduct('products', id).subscribe({
                next: (product) => {
                    this.product = product;
                    this.isLoading = false;
                },
                error: (err) => {
                    this.isLoading = false;
                    console.log(err.message);
                },
            });
        });
    }
}
