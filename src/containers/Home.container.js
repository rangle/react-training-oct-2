import { connect } from 'react-redux';
import { Home } from '../components/Home';
import { search } from '../reducers';

const mapStateToProps = state => ({
  users: state.users.users,
  error: state.users.error,
  query: state.ui.query,
});

const mapDispatchToActions = {
  updateQuery: search,
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToActions)(
  Home,
);
