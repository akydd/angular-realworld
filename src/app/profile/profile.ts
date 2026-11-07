import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
        imports: [],
        selector: 'app-profile',
        templateUrl: './profile.html',
})
export class Profile {
        readonly username: string | null;
        private route = inject(ActivatedRoute);

        constructor() {
                this.username = this.route.snapshot.paramMap.get('username');
        }

}
