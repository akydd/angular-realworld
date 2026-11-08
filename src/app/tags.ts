import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';
import { environment } from '../environments/environment';

export interface TagList {
        tags: string[]
}

@Service()
export class Tags {
        tagList = httpResource<TagList>(() => `${environment.apiUrl}/tags`);
}
