import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Home } from '../components/Home';
import { search } from '../reducers';
import { getFilteredUsers } from '../api/users';

const usersSelector = state => state.users.users;
const querySelector = state => state.ui.query;
const errorSelector = state => state.users.error;

const filteredUsersSelector = createSelector(
  [usersSelector, querySelector],
  (users, query) => getFilteredUsers(users, query),
);

const mapStateToProps = createStructuredSelector({
  users: filteredUsersSelector,
  query: querySelector,
  error: errorSelector,
});

const mapDispatchToActions = {
  updateQuery: search,
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToActions)(
  Home,
);
