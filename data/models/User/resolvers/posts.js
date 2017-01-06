/* @flow */
import { find, filter } from 'lodash';
import { User } from '../index';
import { Posts, EmptyPosts } from '../../Posts';

const postList = {
  id: "1",
  postList: [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  ]
};

type PostsArgs = {
  id: ?string,
};

export default function posts(_: User) {
  console.log("#ACK POs")
  return postList
}
