import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../auth';

export const loggedInGuard: CanActivateFn = (route, state) => {
        const authService = inject(Auth);
        const router = inject(Router);

        if (authService.isLoggedIn()) {
                return router.createUrlTree(['']);
        }

        return true;
};
