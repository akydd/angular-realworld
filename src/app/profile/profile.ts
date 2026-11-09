import { Component, inject, input, computed } from '@angular/core';
import { Profile as ProfileService } from '../profile';
import { Auth } from '../auth';

@Component({
        imports: [],
        selector: 'app-profile',
        templateUrl: './profile.html',
})
export class Profile {
        readonly username = input.required<string>();
        private profileService = inject(ProfileService);
        private readonly authService = inject(Auth);
        protected isLoggedIn = this.authService.isLoggedIn;

        readonly resource = this.profileService.getByUsername(this.username);
        readonly profile = computed(() => this.resource.value()?.profile);
}
