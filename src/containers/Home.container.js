import React from 'react';
import { RobotCard } from '../components/RobotCard';

export class HomeContainer extends React.Component {
  state = {
    users: [],
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { users: [] };
  // }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({
        users: [{ uid: 1, name: 'Alice x', email: 'alice@test.com' }],
      }));
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <RobotCard key={user.uid} {...user} className="w5 ma3" />
        ))}
      </div>
    );
  }
}
