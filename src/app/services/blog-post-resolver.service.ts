import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BlogPost} from '../models/blog-post';
import {Observable} from 'rxjs';
import {BlogPostRepositoryService} from './repository/blog-post-repository.service';

@Injectable({
    providedIn: 'root'
})
export class BlogPostResolverService implements Resolve<BlogPost> {

    constructor(private blogPostRepositoryService: BlogPostRepositoryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost> | Promise<BlogPost> | BlogPost {
        return this.blogPostRepositoryService.getBlogPost(route.params.id);
    }
}
