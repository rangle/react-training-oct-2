import React from 'react';
import { RobotCard } from '../components/RobotCard';
import { getUsers, getFilteredUsers } from '../api/users';
import { SearchBar } from '../components/SearchBar';

export class HomeContainer extends React.Component {
  state = {
    users: [],
    query: '',
    error: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { users: [] };
  //   this.updateQuery.bind(this);
  // }

  componentDidMount() {
    getUsers().then(
      users => {
        this.setState(state => ({ users, error: null }));
      },
      error => this.setState({ error: error.message }),
    );
  }

  updateQuery = query => {
    this.setState({ query });
  };

  render() {
    const users = getFilteredUsers(this.state.users, this.state.query);

    return (
      <div className="mw8 center">
        <SearchBar onSearch={this.updateQuery} value={this.state.query} />
        {this.state.error ? (
          <div>{this.state.error}</div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {users.map(user => (
              <RobotCard key={user.uid} {...user} className="w5 ma3" />
            ))}
          </div>
        )}
      </div>
    );
  }
}
