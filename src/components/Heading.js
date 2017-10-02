import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Heading = ({ level = 1, size = 3, ...props }) => {
  const Tag = 'h' + level;
  return (
    <Tag
      className={classNames('sans-serif dark-gray', `f${size}`)}
      {...props}
    />
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
};

// React.createElement('h' + level, { }, children);
