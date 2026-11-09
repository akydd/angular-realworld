import { Component, input, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ArticlePreview as ArticlePreviewModel } from '../models/articles';
import { RouterLink } from '@angular/router';

@Component({
        imports: [DatePipe, RouterLink],
        selector: 'app-article-preview',
        templateUrl: './article-preview.html',
})
export class ArticlePreview {
        readonly articlePreview = input.required<ArticlePreviewModel>();
        readonly username = computed(() =>
                this.toSlug(this.articlePreview().author.username));
        readonly imgSrc = computed(() =>
                this.articlePreview().author.image || 'https://robohash.org/64.227.209.126.png');

        toSlug(username: string): string {
                return username.replaceAll(' ', '-').toLowerCase();
        }

}
