import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../auth';

@Component({
        imports: [RouterLink, RouterLinkActive],
        selector: 'app-header',
        templateUrl: './header.html',
})
export class Header {
        private readonly authService = inject(Auth);
        protected isLoggedIn = this.authService.isLoggedIn;
        readonly currentUser = this.authService.currentUser;
}
