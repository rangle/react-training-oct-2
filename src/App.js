import React from 'react';
import { connect } from 'react-redux';
import { HomeContainer } from './containers/Home.container';
import { fetchUsers } from './reducers';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <HomeContainer />
      </div>
    );
  }
}

const AppContainer = connect(null, { fetchUsers })(App);

export default AppContainer;
