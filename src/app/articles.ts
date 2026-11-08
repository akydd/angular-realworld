import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ArticleList } from './models/articles';

@Service()
export class Articles {
        articleList = httpResource<ArticleList>(() => `${environment.apiUrl}/articles`);
}
