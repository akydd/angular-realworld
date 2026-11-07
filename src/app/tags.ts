import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';

export interface TagList {
        tags: string[]
}

@Service()
export class Tags {
        private readonly baseUrl = 'http://localhost:8080/api';
        tagList = httpResource<TagList>(() => `${this.baseUrl}/tags`);
}
