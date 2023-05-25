import { Component, Input, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    @Input()
    cartId!: string

    cartService = inject(CartService)
    activatedRoute = inject(ActivatedRoute)

    cart$!: Promise<Cart| null>

    ngOnInit(): void {
        // const cartId = this.activatedRoute.snapshot.params['cartId']

        this.cart$ = this.cartService.getCartById(this.cartId)
    }
}
