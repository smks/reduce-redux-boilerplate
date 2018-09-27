import React, { Component } from 'react';
import './UsersPage.css';

import Panel from '../Panel';

import { getUsers } from '../../actions';

class UsersPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  showUsers() {
    const { users } = this.props;
    if (users.length === 0) {
      return <p>Loading Users...</p>;
    }
    return users.map(user => (
      <div key={user.id} className="user">
        <img alt="avatar" src={`http://i.pravatar.cc/300?img=${user.id}`} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <a href={user.website}>{user.website}</a>
      </div>
    ));
  }

  render() {
    return (
      <Panel size="md">
        <section className="users-page">
          <h1>Users</h1>
          <hr />
          <div className="users">{this.showUsers()}</div>
        </section>
      </Panel>
    );
  }
}

export const mapStateToProps = ({ users }) => users;

export const mapDispatchToProps = {
  getUsers: getUsers.request
};

export default UsersPage;
