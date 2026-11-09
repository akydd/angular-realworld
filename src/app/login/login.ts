import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersClient } from '../users-client';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { LoginData } from '../models/users';
import { firstValueFrom } from 'rxjs';

@Component({
        imports: [RouterLink, FormRoot, FormField],
        selector: 'app-login',
        templateUrl: './login.html',
})
export class Login {
        private readonly usersService = inject(UsersClient);
        private readonly router = inject(Router);

        model = signal({ username: '', password: '' });

        loginForm = form<LoginData>(
                this.model,
                (path) => {
                        required(path.username, { message: 'Username is required' });
                        required(path.password, { message: 'Password is required' });
                },
                {
                        submission: {
                                action: async (field) => {
                                        try {
                                                await firstValueFrom(this.usersService.login({ user: field().value() }));
                                                this.router.navigate(['/']);
                                        } catch (err) {
                                                console.log(err);
                                        }
                                }
                        },
                });

}
