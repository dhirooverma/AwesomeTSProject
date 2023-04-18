import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AlertBox from '../../../src/components/AlertBox';

describe('AlertBox', () => {
  const title = 'Test Alert';
  const message = 'This is a test alert';
  const onPressOK = jest.fn();
  const onPressCancel = jest.fn();
  const okayText = 'OK';
  const visible = true;

  it('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <AlertBox
        title={title}
        message={message}
        onPressOK={onPressOK}
        onPressCancel={onPressCancel}
        needCancelButton={true}
        okayText={okayText}
        visible={visible}
        testID="alertBox"
      />,
    );

    const alertBox = getByTestId('alertBox');
    const titleText = getByText(title);
    const messageText = getByText(message);
    const okButton = getByText(okayText);
    const cancelButton = getByText('Cancel');

    expect(alertBox).toBeTruthy();
    expect(titleText).toBeTruthy();
    expect(messageText).toBeTruthy();
    expect(okButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it('calls onPressOK when OK button is pressed', () => {
    const {getByText} = render(
      <AlertBox
        title={title}
        message={message}
        onPressOK={onPressOK}
        onPressCancel={onPressCancel}
        needCancelButton={true}
        okayText={okayText}
        visible={visible}
        testID="alertBox"
      />,
    );

    const okButton = getByText(okayText);
    fireEvent.press(okButton);

    expect(onPressOK).toHaveBeenCalled();
  });

  it('calls onPressCancel when Cancel button is pressed', () => {
    const {getByText} = render(
      <AlertBox
        title={title}
        message={message}
        onPressOK={onPressOK}
        onPressCancel={onPressCancel}
        needCancelButton={true}
        okayText={okayText}
        visible={visible}
        testID="alertBox"
      />,
    );

    const cancelButton = getByText('Cancel');
    fireEvent.press(cancelButton);

    expect(onPressCancel).toHaveBeenCalled();
  });

  it('does not render Cancel button when needCancelButton is false', () => {
    const {queryByText} = render(
      <AlertBox
        title={title}
        message={message}
        onPressOK={onPressOK}
        onPressCancel={onPressCancel}
        needCancelButton={false}
        okayText={okayText}
        visible={visible}
        testID="alertBox"
      />,
    );

    const cancelButton = queryByText('Cancel');
    expect(cancelButton).toBeFalsy();
  });
});
