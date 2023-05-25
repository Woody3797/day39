import { Injectable, inject } from "@angular/core";
import { Cart } from "./model";
import { CartDatabase } from "./cart.repository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CartService {
    
    username = ''

    cartRepo = inject(CartDatabase)
    
    hasLogin(): boolean {
        return !!this.username
    }

    saveCart(cart: Cart) {
        cart.cartId = uuidv4().substring(0, 8)
        return this.cartRepo.saveCart(cart)
    }

    getCarts(): Promise<Cart[]> {
        return this.cartRepo.getCart()
    }

    getCartById(cartId: string) {
        return this.cartRepo.getCartById(cartId)
    }
}