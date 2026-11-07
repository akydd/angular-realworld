import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ArticlePreview as ArticlePreviewModel } from '../articles';
import { RouterLink } from '@angular/router';

@Component({
        imports: [DatePipe, RouterLink],
        selector: 'app-article-preview',
        templateUrl: './article-preview.html',
})
export class ArticlePreview {
        articlePreview = input.required<ArticlePreviewModel>();
}
