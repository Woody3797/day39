import { Injectable, inject } from "@angular/core";
import Dexie from "dexie";
import { CartService } from "./cart.service";
import { Cart } from "./model";

@Injectable()
export class CartDatabase extends Dexie {

    cartService = inject(CartService)

    carts!: Dexie.Table<Cart, string>

    constructor() {
        super('cart')
        // Creating database
        this.version(1).stores({
            carts: 'cartId',
            // users: 'email'
        })
        this.carts = this.table('carts')
    }

    saveCart(cart: Cart) {
        return this.carts.add(cart)
    }
}