import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { RootQuery } from './root/RootQuery';

const Schema = `
  schema {
    query: RootQuery
  }
`;

const typeDefs = [Schema, RootQuery.schema];

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForNonScalar: false,
  },
});
