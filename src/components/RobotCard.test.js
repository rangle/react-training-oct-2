import React from 'react';
import renderer from 'react-test-renderer';
import { RobotCard } from './RobotCard';

test('RobotCard', () => {
  const tree = renderer
    .create(<RobotCard uid={1} name="Alice X" email="alice@test.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
