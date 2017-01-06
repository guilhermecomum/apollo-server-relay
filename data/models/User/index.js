/* @flow */
import { Posts } from '../Posts';
import posts from './resolvers/posts';

export class User {

  posts: Posts;

  static schema() {
    return [`
      type User {
        posts: Posts
      }`,
      Posts.schema,
    ];
  }

  static Resolvers = {
    posts,
  };
}

export const EmptyUser = new User();
