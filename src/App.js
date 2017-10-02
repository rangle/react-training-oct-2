import React, { Component } from 'react';
import { Text } from './components/Text';
import { Heading } from './components/Heading';

const App = () => (
  <div>
    <Heading level={2} size={4}>
      Alice X
    </Heading>
    <Text color="green">Hello World!</Text>
  </div>
);

export default App;
