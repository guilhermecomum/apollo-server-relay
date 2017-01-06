import { User, EmptyUser } from '../../../models/User';

export default function viewer(): Promise<User> {
  return Promise.resolve(EmptyUser);
}
