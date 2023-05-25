import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { CartDatabase } from './cart.repository';

const appRoutes: Routes = [
    { path: '', component: MainComponent, title: 'Main' },
    { path: 'cart', component: CartComponent, title: 'Cart' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
  ],
  providers: [ CartService, CartDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
