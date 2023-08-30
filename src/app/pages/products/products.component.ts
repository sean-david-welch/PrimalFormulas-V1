import { Component, OnInit } from '@angular/core';
import { Product } from './products.models';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/lib/auth/auth.models';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/lib/store/user/user.selectors';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    user$: Observable<User>;
    products: Product[] = [];
    isLoading = <boolean>false;

    constructor(
        private productsService: ProductsService,
        private store: Store
    ) {
        this.user$ = this.store.select(selectUser);
    }

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
