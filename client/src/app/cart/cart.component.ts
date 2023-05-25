import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from '../model';
import { LeaveComponent } from '../utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, LeaveComponent {

    title = inject(Title)
    cartService = inject(CartService)
    router = inject(Router)
    fb = inject(FormBuilder)

    form!: FormGroup
    itemArr!: FormArray

    ngOnInit(): void {
        // Better to use canActivate + routerGuard instead of this
        // if (!this.cartService.hasLogin()) {
        //     this.router.navigate(['/'])
        // }
        this.title.setTitle('Welcome ' + this.cartService.username)
        this.form = this.createForm()
    }

    createForm(): FormGroup {
        this.itemArr = this.fb.array([])
        this.form = this.fb.group({
            title: this.fb.control('', [ Validators.required]),
            comments: this.fb.control('',),
            items: this.itemArr
        })
        return this.form
    }

    saveCart() {
        const cart: Cart = this.form.value
        console.info(cart)
        this.cartService.saveCart(cart).then(
            result => {
                console.info(result)
                this.createForm()
                this.router.navigate(['/list'])
            }
        )
    }

    addItem() {
        this.itemArr.push(this.createItem())
    }

    removeItem(i: number) {
        this.itemArr.removeAt(i)
    }

    invalid() {
        return this.form.invalid || this.itemArr.length <= 0
    }

    canExit(): boolean {
        return !this.form.dirty
    }

    getMessage(): string {
        return "Are you sure you want to leave? (Specific message for cart component, can customise for each component)"
    }

    private createItem(): FormGroup {
        return this.fb.group({
            item: this.fb.control<string>('', [Validators.required]),
            quantity: this.fb.control<number>(1, [Validators.required, Validators.min(1)])
        })
    }


}
