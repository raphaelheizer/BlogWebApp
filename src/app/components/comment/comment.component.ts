import {Component, Input, OnInit} from '@angular/core';
import {PostComment} from '../../models/post-comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input()
    postComment: PostComment;

    constructor() {
    }

    ngOnInit() {
    }

}
