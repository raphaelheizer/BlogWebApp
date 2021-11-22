import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from '../../models/blog-post';
import {faComments, faEye} from '@fortawesome/free-solid-svg-icons';
import {Formatter} from '../../utilities/formatter';

@Component({
    selector: 'app-blog-post-frame',
    templateUrl: './blog-post-frame.component.html',
    styleUrls: ['./blog-post-frame.component.scss']
})
export class BlogPostFrameComponent implements OnInit {
    truncateTextWithEllipsis = Formatter.truncateTextWithEllipsis;

    faComments = faComments;
    faEye = faEye;

    @Input()
    blogPost: BlogPost;

    constructor() {
    }

    ngOnInit() {
    }
}
