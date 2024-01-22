import {Comment} from '../../comments/model/comment'

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostBody extends Omit<Post, 'title'> {
  comments: Comment[]
}
