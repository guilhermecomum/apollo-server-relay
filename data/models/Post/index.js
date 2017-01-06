/* @flow */
import id from './resolvers/id';

export type PostConstructor = {
  title: string,
  votes: string,
}

export class Post {
  id: string;
  title: string;
  votes: string;

  static schema() {
    return [`
      type Post {
        id: ID!
        title: String
        votes: String
      }`,
    ];
  }

  static Resolvers = {
    id,
  };

  constructor(payload: PostConstructor) {
    console.log("#ACK Post: ", payload);
    this.id = payload.id || JSON.stringify(payload);
    this.title = payload.title;
    this.votes = payload.votes;
  }
}

export const EmptyPost = new Post({
  id: '',
  title: '',
  votes: '',
});
