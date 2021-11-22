import {User} from './user';

export interface PostComment {
    user: User;
    content: string;
}
