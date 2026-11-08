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

export interface Author {
        username: string,
        bio: string,
        image: string,
        following: boolean,
}
