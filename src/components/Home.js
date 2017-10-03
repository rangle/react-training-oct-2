import React from 'react';
import { getFilteredUsers } from '../api/users';
import { RobotCard } from '../components/RobotCard';
import { SearchBar } from '../components/SearchBar';

export const Home = ({ users, query, error, updateQuery }) => {
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
