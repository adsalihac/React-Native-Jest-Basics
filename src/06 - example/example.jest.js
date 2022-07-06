import React from 'react'
import { findWithType, findAllWithType } from 'react-shallow-testutils'
import ShallowRenderer from 'react-test-renderer/shallow';
import Snap from './snap'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from './components/Button'

const renderExample = () => {
  renderer = new ShallowRenderer();
  renderer.render(
    <Snap />
  );
  return renderer.getRenderOutput();
};

describe('06 - example jest', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const result = renderExample();
    expect(result).toMatchSnapshot();
  })

  test('renders button correctly ', () => {
    const result = renderExample();
    const button = findWithType(result, Button);
    button.props.onPress();
  });





});
