import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    username!: string

    router = inject(Router)
    cartService = inject(CartService)
    
    constructor(private element: ElementRef) {
    }

    ngOnInit(): void {
        console.info('elementRef: ' + this.element.nativeElement.getAttribute('username'))
        this.username = this.element.nativeElement.getAttribute('username')

        if (!!this.username) {
            this.cartService.username = this.username
            this.router.navigate(['/list'])
        }
    }
    
}
