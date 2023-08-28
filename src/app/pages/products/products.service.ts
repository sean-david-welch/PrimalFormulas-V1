import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './products.models';
import { api_base_url } from 'src/app/shared/utils/config';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private baseUrl = api_base_url;

    constructor(private http: HttpClient) {}

    fetchProducts(endpoint: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}/${endpoint}`).pipe(
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
        return this.http
            .get<Product>(`${this.baseUrl}/${endpoint}/${productId}`)
            .pipe(
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
}
