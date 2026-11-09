import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersClient } from '../users-client';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { LoginData } from '../models/users';
import { firstValueFrom } from 'rxjs';
import { Auth } from '../auth';

@Component({
        imports: [RouterLink, FormRoot, FormField],
        selector: 'app-login',
        templateUrl: './login.html',
})
export class Login {
        private readonly usersService = inject(UsersClient);
        private readonly authService = inject(Auth);
        private readonly router = inject(Router);

        model = signal({ email: '', password: '' });

        loginForm = form<LoginData>(
                this.model,
                (path) => {
                        required(path.email, { message: 'Email is required' });
                        required(path.password, { message: 'Password is required' });
                },
                {
                        submission: {
                                action: async (field) => {
                                        try {
                                                const user = await firstValueFrom(this.usersService.login({ user: field().value() }));
                                                this.authService.setUser(user.user);
                                                this.router.navigate(['/']);
                                        } catch (err) {
                                                console.log(err);
                                        }
                                }
                        },
                });

}
