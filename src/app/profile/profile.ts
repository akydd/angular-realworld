import { Component, inject, input, computed } from '@angular/core';
import { Profile as ProfileService } from '../profile';
import { Auth } from '../auth';
import { httpResource } from '@angular/common/http';
import { ArticleList } from '../models/articles';
import { environment } from '../../environments/environment';
import { ArticlePreview } from '../article-preview/article-preview';

@Component({
        imports: [ArticlePreview],
        selector: 'app-profile',
        templateUrl: './profile.html',
})
export class Profile {
        readonly username = input.required<string>();

        private readonly profileService = inject(ProfileService);
        private readonly authService = inject(Auth);

        protected isLoggedIn = this.authService.isLoggedIn;
        private readonly currentUser = this.authService.currentUser;

        readonly resource = this.profileService.getByUsername(this.username);
        readonly profile = computed(() => this.resource.value()?.profile);
        readonly isItMe = computed(() => this.username() === this.currentUser()?.username);

        readonly articleList = httpResource<ArticleList>(() => `${environment.apiUrl}/articles?author=${this.profile()?.username}`);
}
