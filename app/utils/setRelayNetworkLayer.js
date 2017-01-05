import Relay from 'react-relay';

export default () => {
  console.log("#ACK GRaph: ", process.env.GRAPHQL_ENDPOINT)
  if (!process.env.GRAPHQL_ENDPOINT) { throw new Error('GRAPHQL_ENDPOINT is not defined'); }

  Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(process.env.GRAPHQL_ENDPOINT, {
      fetchTimeout: 30000,
    })
  );
};
