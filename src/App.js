import React, { Component } from 'react';
import { RobotCard } from './components/RobotCard';

const App = ({ users }) => (
  <div>
    {users.map(user => (
      <RobotCard key={user.uid} {...user} className="w5 ma3" />
    ))}
  </div>
);

export default App;
