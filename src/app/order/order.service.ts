import { Injectable } from "@angular/core";

import { ShoppingCartService } from "app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurants/restaurant-detail/shopping-cart/CartItem";
import { Order } from "./order.model";

import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService,
        private http: Http) {}

    cartItems(): CartItem[] {
        return this.cartService.itens
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    increaseQty(item: CartItem): void {
        this.cartService.increaseQty(item)
    }
    
    decreaseQty(item: CartItem): void {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem): void {
        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, 
                JSON.stringify(order), 
                new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(order => order.id)
    }

    clear(): void {
        this.cartService.clear()
    }
}