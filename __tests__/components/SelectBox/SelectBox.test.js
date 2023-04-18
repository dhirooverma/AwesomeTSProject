import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SelectBox from '../../../src/components/SelectBox/index';

describe('SelectBox', () => {
  const data = [
    {key: 'key1', value: 'Value 1'},
    {key: 'key2', value: 'Value 2'},
    {key: 'key3', value: 'Value 3'},
  ];

  it('renders the default value correctly', () => {
    const preSelected = 'key2';
    const {getByTestId} = render(
      <SelectBox data={data} preSelected={preSelected} />,
    );
    const selectBoxText = getByTestId('selectBoxText');
    expect(selectBoxText.children[0]).toEqual('VALUE 2');
  });

  it('opens the modal when the select box is pressed on iOS', () => {
    const {getByTestId} = render(<SelectBox data={data} />);
    const selectBox = getByTestId('selectBox');
    fireEvent.press(selectBox);
    const modal = getByTestId('modal');
    expect(modal).toBeDefined();
  });

  // it('selects a value correctly on Android', () => {
  //   const onValueChange = jest.fn();
  //   const {getByTestId} = render(
  //     <SelectBox data={data} onValueChange={onValueChange} />,
  //   );
  //   const selectBox = getByTestId('selectBox');
  //   fireEvent(selectBox, 'onValueChange', 'key3', 2);
  //   expect(onValueChange).toHaveBeenCalledTimes(1);
  //   expect(onValueChange).toHaveBeenCalledWith('key3', 2);
  // });
});
