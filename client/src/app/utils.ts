import { inject } from "@angular/core";
import { CanActivateFn, CanDeactivateFn, Router } from "@angular/router";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";

export interface LeaveComponent {
    canExit() : boolean
    getMessage(): string
}

export const loginGuard: CanActivateFn = (route, state) => {
    const cartService = inject(CartService)
    const router = inject(Router)

    if (cartService.hasLogin()) {
        return true
    } else {
        return router.createUrlTree(['/'])
    }
}

export const leaveComp: CanDeactivateFn<LeaveComponent> = (component, currentRoute, currentState, nextState) => {
    if (component.canExit()) {
        return true
    } else {
        return confirm(component.getMessage())
    }
}