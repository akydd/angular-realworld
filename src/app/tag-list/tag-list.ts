import { Component, inject } from '@angular/core';
import { Tags } from '../tags';

@Component({
        imports: [],
        selector: 'app-tag-list',
        templateUrl: './tag-list.html',
})
export class TagList {
        protected tagsService = inject(Tags);
}
