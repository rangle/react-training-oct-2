import React from 'react';
import { RobotCard } from '../components/RobotCard';
import { getUsers } from '../api/users';

export class HomeContainer extends React.Component {
  state = {
    users: [],
    error: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { users: [] };
  // }

  componentDidMount() {
    getUsers().then(
      users => {
        this.setState(state => ({ users, error: null }));
      },
      error => this.setState({ error: error.message }),
    );
  }

  render() {
    return (
      <div>
        {this.state.error ? (
          <div>{this.state.error}</div>
        ) : (
          <div>
            {this.state.users.map(user => (
              <RobotCard key={user.uid} {...user} className="w5 ma3" />
            ))}
          </div>
        )}
      </div>
    );
  }
}
