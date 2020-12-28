import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.style.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to='/'>Reduc Auth</Link>
        {this.props.authenticated ? (
          <div>
            <Link to='/signout'>Sign out</Link>
            <Link to='/feature'>Feature</Link>
          </div>
        ) : (
          <div>
            <Link to='/signup'>Sign up</Link>
            <Link to='/signin'>Sign in</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
