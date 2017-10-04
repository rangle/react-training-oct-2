import React from 'react';
import { Link } from 'react-router-dom';
import { RobotCard } from '../components/RobotCard';
import { SearchBar } from '../components/SearchBar';
import { LoginForm } from '../components/LoginForm';

export const Home = ({ users, query, error, updateQuery }) => {
  return (
    <div className="mw8 center">
      <SearchBar onSearch={updateQuery} value={query} />
      <LoginForm />
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {users.map(user => (
            <Link to={`/users/${user.uid}`} key={user.uid} className="link">
              <RobotCard {...user} className="w5 ma3" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
