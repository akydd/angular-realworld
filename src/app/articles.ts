import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';

export interface Author {
        username: string,
        bio: string,
        image: string,
        following: boolean,
}
export interface ArticlePreview {
        slug: string,
        title: string,
        description: string,
        tagList: string[],
        createdAt: Date,
        updatedAt: Date,
        favorited: boolean,
        favoritesCount: number,
        author: Author,
}

export interface ArticleList {
        articles: ArticlePreview[],
        articlesCount: number,

}

@Service()
export class Articles {
        private readonly baseUrl = 'http://localhost:8080/api';
        articleList = httpResource<ArticleList>(() => `${this.baseUrl}/articles`);
}
