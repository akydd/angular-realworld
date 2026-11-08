import { Component, inject, input, computed } from '@angular/core';
import { Profile as ProfileService } from '../profile';

@Component({
        imports: [],
        selector: 'app-profile',
        templateUrl: './profile.html',
})
export class Profile {
        readonly username = input.required<string>();
        private profileService = inject(ProfileService);

        readonly resource = this.profileService.getByUsername(this.username);
        readonly profile = computed(() => this.resource.value()?.profile);
}
