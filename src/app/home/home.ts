import { Component, inject } from '@angular/core';
import { ArticlePreview } from '../article-preview/article-preview';
import { TagList } from '../tag-list/tag-list';
import { Articles } from '../articles';

@Component({
        imports: [ArticlePreview, TagList],
        selector: 'app-home',
        templateUrl: './home.html',
})
export class Home {
        protected articlesService = inject(Articles);
}
