import {User} from './user';
import {PostComment} from './post-comment';

export interface BlogPost {
    id: number;
    content: string;
    title: string;
    author: User;
    comments: PostComment[];
    viewCount: number;
    timestamp: Date;
    category: string;
    commentCount: number;
}
