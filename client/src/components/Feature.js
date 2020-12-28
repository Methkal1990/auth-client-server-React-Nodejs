import React from 'react';
import withAuth from './withAuth';

class Feature extends React.Component {
  render() {
    return <div>This is the Feature</div>;
  }
}

export default withAuth(Feature);
