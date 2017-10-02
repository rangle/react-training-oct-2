import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Text = ({
  color = 'dark-gray',
  fontSize = 5,
  disabled,
  className,
  ...props
}) => (
  <p
    className={classNames(
      color,
      `f${fontSize}`,
      'sans-serif',
      {
        'o-50': disabled,
      },
      className,
    )}
    {...props}
  />
);

Text.propTypes = {
  fontSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
};
