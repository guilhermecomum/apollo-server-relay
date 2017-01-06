import { User } from '../../models/User';
import viewer from './resolvers/viewer';

export class RootQuery {

  static schema() {
    return [`
      type RootQuery {
        viewer: User
      }`,
      User.schema,
    ];
  }

  static Resolvers = {
    viewer,
  };

}
