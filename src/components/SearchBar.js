import React from 'react';

export const SearchBar = ({ onSearch, ...props }) => (
  <div className="pa3 tc bb b--gray mb3">
    <input
      className="input-reset ba pa2"
      type="text"
      onChange={e => {
        onSearch(e.target.value);
      }}
      {...props}
    />
  </div>
);
