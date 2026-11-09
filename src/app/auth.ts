import { computed, Service, signal } from '@angular/core';

const JWT_KEY = 'real_api_jwt';

@Service()
export class Auth {
        private tokenSignal = signal<string | null>(localStorage.getItem(JWT_KEY));

        readonly isLoggedIn = computed(() => !!this.tokenSignal());
        readonly token = computed(() => this.tokenSignal());

        setToken(token: string) {
                localStorage.setItem(JWT_KEY, token);
                this.tokenSignal.set(token);
        }


}
