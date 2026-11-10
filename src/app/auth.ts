import { computed, Service, signal, inject } from '@angular/core';
import { UserClient } from './user-client';
import { User } from './models/users';
import { firstValueFrom } from 'rxjs';

export const JWT_KEY = 'real_api_jwt';

/**
 * This service handles the following:
 *
 * 1. After a siccessful login
 *    a. Store the returned user in a signal
 *    b. Persist the user's JWT token in localstorage
 *
 * 2. On startup (called by provideAppInitilizer in app.config)
 *    a. Check for jwt token in localstorage
 *    b. If the token is there, fetch the user and set the signal
 */

@Service()
export class Auth {
        private userSignal = signal<User | null>(null);
        currentUser = this.userSignal.asReadonly();

        private userService = inject(UserClient);

        readonly isLoggedIn = computed(() => !!this.userSignal());

        setUser(user: User) {
                this.userSignal.set(user);
                localStorage.setItem(JWT_KEY, user.token);
        }

        async autoLogin(): Promise<void> {
                const token = localStorage.getItem(JWT_KEY);
                if (!token) {
                        return
                }

                try {
                        const userResponse = await firstValueFrom(this.userService.getUser())
                        this.setUser(userResponse.user);
                } catch (err) {
                        console.log(err);
                };
        }
}
