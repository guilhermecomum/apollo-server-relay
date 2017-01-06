import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {

  renderPosts() {
    return this.props.viewer.posts.postList.map(p =>
      <li key={p.id}>{p.title}</li>
    );
  }

  render() {
    return (
      <div>
        <h1>GraphQL Blog</h1>
        <ul>
         {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        posts {
         id
         postList {
           id
           title
         }
        }
      }
    `,
  },
});
