import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InputText from '../../../src/components/InputText/index'

describe('InputText', () => {
  it('should render correctly with default props', () => {
    const {getByTestId} = render(<InputText testID="activityInput" />);
    const input = getByTestId('activityInput');
    expect(input).toBeDefined();
  });

  it('should render an error message when errorMessage prop is passed', () => {
    const errorMessage = 'Invalid input';
    const {getByText} = render(<InputText errorMessage={errorMessage} />);
    const errorText = getByText(errorMessage);
    expect(errorText).toBeDefined();
  });

  it('should call onFocus and onBlur handlers when input is focused and blurred', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const {getByTestId} = render(
      <InputText onFocus={onFocus} onBlur={onBlur} testID="activityInput"/>,
    );
    const input = getByTestId('activityInput');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
