import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blog-post';
import {ActivatedRoute} from '@angular/router';
import {Formatter} from '../../utilities/formatter';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    truncateTextWithEllipsis = Formatter.truncateTextWithEllipsis;

    blogPost: BlogPost;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.blogPost = this.route.snapshot.data.id;
    }
}
