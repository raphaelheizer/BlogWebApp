import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blog-post';
import {Observable} from 'rxjs';
import {BlogPostRepositoryService} from '../../services/repository/blog-post-repository.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    blogPosts: Observable<BlogPost[]> = new Observable<BlogPost[]>();

    constructor(private blogPostRepositoryService: BlogPostRepositoryService) {
    }

    ngOnInit() {
        this.blogPosts = this.blogPostRepositoryService.getAllBlogPosts();
    }

}
