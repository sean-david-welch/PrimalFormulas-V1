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
    public productUpdate$ = this.productUpdate.asObservable();

    constructor(private http: HttpClient) {}

    private constructUrl(endpoint: string, params?: string): string {
        return params
            ? `${api_base_url}/${endpoint}/${params}`
            : `${api_base_url}/${endpoint}`;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(() => new Error('An error occurred', error.message));
    }

    public notifyProductAdded(product: Product): void {
        this.productUpdate.next(product);
    }

    public fetchProducts(endpoint: string): Observable<Product[]> {
        const url = this.constructUrl(endpoint);
        return this.http.get<Product[]>(url).pipe(catchError(this.handleError));
    }

    public fetchSingleProduct(
        endpoint: string,
        productId: string
    ): Observable<Product> {
        const url = this.constructUrl(endpoint, productId);
        return this.http.get<Product>(url).pipe(catchError(this.handleError));
    }

    public createProduct(
        endpoint: string,
        product: Product
    ): Observable<Product> {
        const url = this.constructUrl(endpoint);
        return this.http
            .post<Product>(url, product, { withCredentials: true })
            .pipe(catchError(this.handleError));
    }

    public updateProduct(
        endpoint: string,
        product: Product,
        productId: string
    ): Observable<Product> {
        const url = this.constructUrl(endpoint, productId);
        return this.http
            .put<Product>(url, product, { withCredentials: true })
            .pipe(catchError(this.handleError));
    }
}
