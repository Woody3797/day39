import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    form!: FormGroup
    
    fb = inject(FormBuilder)
    cartService = inject(CartService)
    router = inject(Router)


    ngOnInit(): void {
        this.form = this.fb.group({
            username: this.fb.control('', [ Validators.required]),
        })
    }

    login() {
        const username = this.form.get('username')?.value
        console.info(username)
        this.cartService.username = username
        this.router.navigate(['/cart'])
    }
}
