import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { CartDatabase } from './cart.repository';
import { ListComponent } from './list/list.component';
import { leaveComp, loginGuard } from './utils';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent, title: 'Main' },
    { path: 'cart', component: CartComponent, title: 'Cart', canActivate: [ loginGuard ], canDeactivate: [ leaveComp ] },
    { path: 'cart/:cartId', component: DetailsComponent, title: 'Details', canActivate: [ loginGuard ] },
    { path: 'list', component: ListComponent, title: 'List', canActivate: [ loginGuard ] },
    
    { path: '**', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false, bindToComponentInputs: true }),
  ],
  providers: [ CartService, CartDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
