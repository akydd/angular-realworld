import { Component, input } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SingleArticle } from '../models/articles';

@Component({
        imports: [],
        selector: 'app-article',
        templateUrl: './article.html',
})
export class Article {
        readonly slug = input.required<string>();
        readonly article = httpResource<SingleArticle>(() => `${environment.apiUrl}/articles/${this.slug()}`);
}
