import React from 'react';
import PropTypes from 'prop-types';

const ROBOHASH = 'https://robohash.org/';

export const Avatar = ({ uid, className = '', ...props }) => (
  <img
    src={`${ROBOHASH}${uid}`}
    alt="user profile"
    className={`br-100 w4 h4 ${className}`}
    {...props}
  />
);

Avatar.propTypes = {
  uid: PropTypes.number.isRequired,
};
