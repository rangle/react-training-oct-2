import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomeContainer } from './containers/Home.container';
import { fetchUsers } from './reducers';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="ma3">
              <Link to="/" className="link blue mb4">
                Home
              </Link>
            </nav>

            <Route exact path="/" component={HomeContainer} />
            <Route path="/users" component={() => <h1>User Details</h1>} />
          </div>
        </Router>
      </div>
    );
  }
}

const AppContainer = connect(null, { fetchUsers })(App);

export default AppContainer;
