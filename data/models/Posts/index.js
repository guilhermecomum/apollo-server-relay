/* @flow */
import type { PostConstructor } from '../Post';
import { Post } from '../Post';
import id from './resolvers/id';

type PostsConstructor = {
  postList: Array<PostConstructor>,
}

export class Posts {
  id: string;
  postList: Array<PostConstructor>;

  static schema() {
    return [`
      type Posts {
        id: ID!
        postList: [Post]
      }`,
      Post.schema,
    ];
  }

  static Resolvers = {
    id,
  };

  constructor(payload: PostsConstructor) {
    console.log("#ACK Posts: ", payload);
    this.id = payload.id || JSON.stringify(payload);
    this.postList = payload.posts ? payload.posts.map(p => new Post(p)) : [];
  }
}

export const EmptyPosts = new Posts({
  id: '',
  posts: [],
});
