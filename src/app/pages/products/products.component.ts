import { Component, OnInit } from '@angular/core';
import { Product } from './products.models';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    public products: Product[] = [];
    public isLoading = <boolean>false;

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.isLoading = true;

        this.fetchProducts();

        this.productsService.productUpdate$.subscribe((newProduct) => {
            if (newProduct) {
                this.fetchProducts();
            }
        });
    }

    public getProductLink(id: string): string {
        return `/products/${id}`;
    }

    private fetchProducts(): void {
        this.productsService.fetchProducts('products').subscribe((response) => {
            this.products = response;
            this.isLoading = false;
        });
    }
}
