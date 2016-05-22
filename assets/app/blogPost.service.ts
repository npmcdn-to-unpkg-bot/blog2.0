import {Injectable} from '@angular/core';

import {BLOGPOSTS} from './mock-blogPosts';

@Injectable()

export class BlogPostService {
    getBlogPosts() {
        return Promise.resolve(BLOGPOSTS);
    }
}