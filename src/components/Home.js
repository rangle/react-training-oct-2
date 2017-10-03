import React from 'react';
import { RobotCard } from '../components/RobotCard';
import { SearchBar } from '../components/SearchBar';

export const Home = ({ users, query, error, updateQuery }) => {
  return (
    <div className="mw8 center">
      <SearchBar onSearch={updateQuery} value={query} />
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {users.map(user => (
            <RobotCard key={user.uid} {...user} className="w5 ma3" />
          ))}
        </div>
      )}
    </div>
  );
};
