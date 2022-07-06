import React from 'react'
import { findWithType , findAllWithType } from 'react-shallow-testutils'
import ShallowRenderer from 'react-test-renderer/shallow';
import Snap from './snap'


const renderSnap = () => {
    renderer = new ShallowRenderer();
    renderer.render(
     <Snap />
    );
    return renderer.getRenderOutput();
  };

describe('05 - snapshot', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

    test('renders correctly', () => {
         const result = renderSnap();
        expect(result).toMatchSnapshot();
    })
    
    


});
