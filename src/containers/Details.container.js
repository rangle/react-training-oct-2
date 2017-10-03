import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Details } from '../components/Details';
import { getUserByID } from '../api/users';

const usersSelector = state => state.users.users;
const uidSelector = (state, props) => parseInt(props.match.params.uid, 10);

const userByIdSelector = createSelector(
  [uidSelector, usersSelector],
  getUserByID,
);

const mapStateToProps = createStructuredSelector({
  user: userByIdSelector,
});

export const DetailsContainer = connect(mapStateToProps, null)(Details);
