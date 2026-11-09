import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot, required, email } from '@angular/forms/signals';
import { RouterLink, Router } from '@angular/router';
import { RegisterUserData } from '../models/users';
import { UsersClient } from '../users-client';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponse } from '../models/error';
import { firstValueFrom } from 'rxjs';

@Component({
        imports: [RouterLink, FormField, FormRoot],
        selector: 'app-register',
        templateUrl: './register.html',
})
export class Register {
        private readonly usersService = inject(UsersClient);
        private readonly router = inject(Router);

        model = signal({ username: '', email: '', password: '' });

        registerForm = form<RegisterUserData>(
                this.model,
                (path) => {
                        required(path.username, { message: 'Username is required' });
                        required(path.email, { message: 'Email is required' });
                        email(path.email, { message: 'Enter a valid email' });
                        required(path.password, { message: 'Password is required' });
                },
                {
                        submission: {
                                action: async (field) => {
                                        try {
                                                await firstValueFrom(this.usersService.registerUser({ user: field().value() }));
                                                this.router.navigate(['/login']);
                                        } catch (err) {
                                                console.log(err);
                                        }
                                }
                        },
                });
}
