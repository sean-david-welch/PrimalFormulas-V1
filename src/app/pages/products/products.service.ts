import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './products.models';
import { api_base_url } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private productUpdate = new BehaviorSubject<Product | null>(null);
    productUpdate$ = this.productUpdate.asObservable();

    private constructUrl(endpoint: string, params?: string): string {
        return params
            ? `${api_base_url}/${endpoint}/${params}`
            : `${api_base_url}/${endpoint}`;
    }

    constructor(private http: HttpClient) {}

    notifyProductAdded(product: Product): void {
        this.productUpdate.next(product);
    }

    fetchProducts(endpoint: string): Observable<Product[]> {
        const url = this.constructUrl(endpoint);
        return this.http.get<Product[]>(url).pipe(
            catchError((error) => {
                console.error('Failed to fetch products array', error);
                return throwError(
                    () =>
                        new Error(
                            'An error occured while fetching products',
                            error.message
                        )
                );
            })
        );
    }

    fetchSingleProduct(
        endpoint: string,
        productId: string
    ): Observable<Product> {
        const url = this.constructUrl(endpoint, productId);
        return this.http.get<Product>(url).pipe(
            catchError((error) => {
                console.error('Failed to fetch product by ID', error);
                return throwError(
                    () =>
                        new Error(
                            'An error occured when fetching the product',
                            error.message
                        )
                );
            })
        );
    }

    createProduct(endpoint: string, product: Product): Observable<Product> {
        const url = this.constructUrl(endpoint);
        return this.http
            .post<Product>(url, product, { withCredentials: true })
            .pipe(
                catchError((error) => {
                    console.error('Failed to create product', error);
                    return throwError(
                        () =>
                            new Error(
                                'An error occurred while creating the product',
                                error.message
                            )
                    );
                })
            );
    }
}
