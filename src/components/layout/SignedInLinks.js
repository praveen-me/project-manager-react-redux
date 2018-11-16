import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../store/actions/authActions';
class SignedInLinks extends Component {
  
  handleClick = e => {
    e.preventDefault();
    this.props.signOut();
  }
  
  render() {
    return (
      <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><NavLink to="/" onClick={this.handleClick}>Log Out</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signOut : () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);