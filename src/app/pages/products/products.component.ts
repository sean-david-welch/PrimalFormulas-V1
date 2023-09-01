import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './products.models';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products: Product[] = [];
    public isLoading = <boolean>false;

    private productSubscription: Subscription = new Subscription();

    constructor(private productsService: ProductsService) {}

    public getProductLink(id: string): string {
        return `/products/${id}`;
    }

    private getProducts(): void {
        this.productsService.fetchProducts('products').subscribe({
            next: (response) => {
                this.products = response;
                this.isLoading = false;
            },
            error: (error: Error) => {
                this.isLoading = false;
                console.log(error.message);
            },
        });
    }

    ngOnInit(): void {
        this.isLoading = true;

        this.getProducts();

        this.productSubscription =
            this.productsService.productUpdate$.subscribe((newProduct) => {
                if (newProduct) {
                    this.getProducts();
                }
            });
    }

    ngOnDestroy(): void {
        this.productSubscription.unsubscribe();
    }
}
