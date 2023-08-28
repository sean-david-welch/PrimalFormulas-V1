import { Component, OnInit } from '@angular/core';
import { Product } from './products.models';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    isLoading = <boolean>false;

    constructor(private productsService: ProductsService) {}

    public getProductLink(id: string): string {
        return `/products/${id}`;
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.productsService.fetchProducts('products').subscribe((response) => {
            this.products = response;
            this.isLoading = false;
        });
    }
}
