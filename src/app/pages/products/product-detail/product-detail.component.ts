import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products.models';
import { ProductsService } from '../products.service';
import { User } from 'src/app/lib/auth/auth.models';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/lib/store/user/user.selectors';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
    public user$: Observable<User>;
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
        private route: ActivatedRoute,
        private store: Store
    ) {
        this.user$ = this.store.select(selectUser);
    }

    private fetchProduct(): void {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            this.productsService.fetchSingleProduct('products', id).subscribe({
                next: (product) => {
                    this.product = product;
                    this.isLoading = false;
                    console.log(this.product);
                },
                error: (err) => {
                    this.isLoading = false;
                    console.log(err.message);
                },
            });
        });
    }

    ngOnInit(): void {
        this.isLoading = true;

        this.fetchProduct();

        this.productsService.productUpdate$.subscribe((newProduct) => {
            if (newProduct) {
                this.fetchProduct();
            }
        });
    }
}
