import { Injectable, inject } from "@angular/core";
import Dexie from "dexie";
import { Cart } from "./model";

@Injectable()
export class CartDatabase extends Dexie {

    carts!: Dexie.Table<Cart, string>

    constructor() {
        super('cart')
        // Creating database for first time, any changes like adding fields needs to have another version number
        this.version(1).stores({
            carts: 'cartId',
            // users: 'username' or any other fields to save in the index
        })
        this.carts = this.table('carts')
    }

    saveCart(cart: Cart) {
        return this.carts.add(cart)
    }

    getCart(): Promise<Cart[]> {
        return this.carts.toArray()
    }

    getCartById(cartId: string): Promise<Cart | null> {
        return this.carts.where('cartId').equals(cartId).toArray().then(
            result => {
                return result.length > 0 ? result[0] : null
            }
        )
    }
}