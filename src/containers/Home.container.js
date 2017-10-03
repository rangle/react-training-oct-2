import React from 'react';
import { connect } from 'react-redux';
import { RobotCard } from '../components/RobotCard';
import { getUsers, getFilteredUsers } from '../api/users';
import { SearchBar } from '../components/SearchBar';

const Home = ({ users, query, error, updateQuery }) => {
  const filteredUsers = getFilteredUsers(users, query);

  return (
    <div className="mw8 center">
      <SearchBar onSearch={updateQuery} value={query} />
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredUsers.map(user => (
            <RobotCard key={user.uid} {...user} className="w5 ma3" />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.users,
  error: state.users.error,
  query: state.ui.query,
});

const mapDispatchToActions = {};

export const HomeContainer = connect(mapStateToProps, mapDispatchToActions)(
  Home,
);
