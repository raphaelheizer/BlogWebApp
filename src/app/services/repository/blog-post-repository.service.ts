import {Injectable} from '@angular/core';
import {RepositoryService} from './repository.service';
import {BlogPost} from '../../models/blog-post';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogPostRepositoryService extends RepositoryService<BlogPost> {

    private requestParam = '/blogposts';

    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    public getAllBlogPosts(): Observable<BlogPost[]> {
        return this.getAll(this.requestParam);
    }

    public getBlogPost(blogPostId: number): Observable<BlogPost> {
        return this.get(`${this.requestParam}/${blogPostId}`);
    }
}
