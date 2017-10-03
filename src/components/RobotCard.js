import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from './Avatar';
import { Heading } from './Heading';
import { Text } from './Text';
import { TiltCard } from './TiltCard';

export const RobotCard = ({ uid, name, email, className, ...props }) => (
  <TiltCard className={`pa3 bg-near-white br2 tc ${className}`} {...props}>
    <Avatar uid={uid} />
    <Heading level={2} size={4}>
      {name}
    </Heading>
    <Text color="green">{email}</Text>
  </TiltCard>
);

RobotCard.PropTypes = {
  uid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
