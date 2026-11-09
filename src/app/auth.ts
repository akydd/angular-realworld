import { computed, Service, signal, inject } from '@angular/core';
import { UserClient } from './user-client';
import { User } from './models/users';
import { firstValueFrom } from 'rxjs';

export const JWT_KEY = 'real_api_jwt';

/**
 * This service handles the following:
 * 1. After a siccessful login
 *    a. Store the returned user in a signal
 *    b. Persist the user's JWT token in localstorage
 *
 * 2. On startup
 *    a. Check for jwt token in localstorage
 *    b. If the token is there, fetch the user and set the signal
 */

@Service()
export class Auth {
        private userSignal = signal<User | null>(null);

        private userService = inject(UserClient);

        readonly isLoggedIn = computed(() => !!this.userSignal());

        setUser(user: User) {
                this.userSignal.set(user);
                localStorage.setItem(JWT_KEY, user.token);
        }

        autoLogin() {
                const token = localStorage.getItem(JWT_KEY);
                if (!token) {
                        return
                }

                // This is not an async function, so we use traditional promise chaining.
                firstValueFrom(this.userService.getUser())
                        .then(userResponse => {
                                this.setUser(userResponse.user);
                        })
                        .catch(err => {
                                console.log(err);
                        });
        }

        constructor() {
                this.autoLogin();
        }
}
