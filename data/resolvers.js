import { Posts } from './models/Posts';
import { Post } from './models/Post';
import { User } from './models/User';
import { RootQuery } from './root/RootQuery';

export default {
  Posts: Posts.Resolvers,
  Post: Posts.Resolvers,
  User: User.Resolvers,
  RootQuery: RootQuery.Resolvers,
};
