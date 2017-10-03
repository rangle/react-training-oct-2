import React from 'react';
import { RobotCard } from './RobotCard';

export const Details = ({ user }) => (
  <div className="vh-75 flex items-center and justify-center">
    <RobotCard {...user} />
  </div>
);
