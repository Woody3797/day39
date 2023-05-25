import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    cartService = inject(CartService)

    carts$!: Promise<Cart[]>

    ngOnInit(): void {
        this.carts$ = this.cartService.getCarts()
    }
}
