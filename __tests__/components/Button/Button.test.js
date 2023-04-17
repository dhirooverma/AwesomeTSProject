import React from 'react';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react-native';
import Button from '../../../src/components/Button';

describe("button is clickable",()=>{
    const onPressMock = jest.fn();
    const title = 'Press me';

    it('renders correctly', () => {
      const {getByText} = render(
        <Button title={title} onPress={onPressMock} />,
      );
      const button = getByText(title);
       expect(button).toHaveTextContent(title);
    });
     it('calls onPress prop when button is pressed', () => {
       const {getByText} = render(
         <Button title={title} onPress={onPressMock} />,
       );
       const button = getByText(title);
       fireEvent.press(button);
       expect(onPressMock).toHaveBeenCalled();
     });
})
