import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, required, email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { RegisterUserData } from '../models/users';

@Component({
        imports: [RouterLink, FormField, FormRoot],
        selector: 'app-register',
        templateUrl: './register.html',
})
export class Register {
        model = signal({ username: '', email: '', password: '' });
        registerForm = form<RegisterUserData>(this.model, (path) => {
                required(path.username);
                email(path.email);
                required(path.password);
        });
}
