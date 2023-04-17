// Import the necessary modules for testing
import React from 'react';
import { render, fireEvent,within } from '@testing-library/react-native';

import AlertBox from '../../src/components/AlertBox';
import ActivityTable from '../../src/components/ActivityTable/index';
import SearchActivity from '../../src/screens/SerachActivity';
// Mock data for testing
const mockActivities = [
  { id: 1, title: 'Activity 1', description: 'Description for activity 1' },
  { id: 2, title: 'Activity 2', description: 'Description for activity 2' },
  { id: 3, title: 'Activity 3', description: 'Description for activity 3' },
];

describe('SearchActivity component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SearchActivity />);
    expect(getByTestId('search-activity')).toBeDefined();
  });

 


  it('displays an alert box when the "Delete" button is pressed', () => {
    const { getByTestId, getByText } = render(
      <SearchActivity activities={mockActivities} />
    );
    const deleteButton = getByTestId('delete-icon-0');
    fireEvent.press(deleteButton);
      const alertBox = getByTestId('deleteConfirmationAlert');
      expect(alertBox).toBeDefined();
  });

//   it('deletes an activity when "OK" is pressed in the alert box', () => {
//     const deleteActivity = jest.fn();
//     const { getByTestId, getByText } = render(
//       <SearchActivity activities={mockActivities} deleteActivity={deleteActivity} />
//     );
//     const deleteButton = getByTestId('delete-icon-0');
//     fireEvent.press(deleteButton);
    
   
//     const alertBox = getByTestId('alertBox');
//     const okButton = within(alertBox).getByText('OK');
//     fireEvent.press(okButton);
//     expect(deleteActivity).toHaveBeenCalled();
//   });


  it('closes the alert box when "Cancel" is pressed', () => {
    const {getByTestId, queryByTestId, getByText} = render(
      <SearchActivity activities={mockActivities} />,
    );
    const deleteButton = getByTestId('delete-icon-0');
    fireEvent.press(deleteButton);
    const cancel = getByTestId('alertBox');
    const cancelButton = within(cancel).getByText('Cancel');
    fireEvent.press(cancelButton);
    expect(queryByTestId('alert-box')).toBeNull();
  });
});



  describe('AlertBox component', () => {
it('renders correctly', () => {
const { getByTestId } = render(<AlertBox visible />);
expect(getByTestId('alertBox')).toBeDefined();
});

it('displays the title and message passed in', () => {
const title = 'This is a title';
const message = 'This is a message';
const { getByText } = render(
<AlertBox title={title} message={message} visible />,
);
expect(getByText(title)).toBeDefined();
expect(getByText(message)).toBeDefined();
});

it('calls onPressOK when OK button is pressed', () => {
  const onPressOK = jest.fn();
  const {getByTestId, getByText} = render(
    <AlertBox
      visible
      title="Test Title"
      message="Test Message"
      onPressOK={onPressOK}
      okayText="OK"
    />,
  );
  const okButton = getByText(/OK/i);
  fireEvent.press(okButton);
  expect(onPressOK).toHaveBeenCalled();
});


it('calls onPressCancel when Cancel button is pressed', () => {
const onPressCancel = jest.fn();
const { getByText } = render(
<AlertBox
     title="This is a title"
     message="This is a message"
     visible
     onPressCancel={onPressCancel}
     needCancelButton
   />,
);
fireEvent.press(getByText('Cancel'));
expect(onPressCancel).toHaveBeenCalled();
});

it('does not display the Cancel button if needCancelButton is false', () => {
const { queryByText } = render(
<AlertBox
     title="This is a title"
     message="This is a message"
     visible
     needCancelButton={false}
   />,
);
expect(queryByText('Cancel')).toBeNull();
});

it('displays the custom OK text passed in', () => {
const okayText = 'Confirm';
const { getByText } = render(
<AlertBox
     title="This is a title"
     message="This is a message"
     visible
     okayText={okayText}
   />,
);
expect(getByText(okayText)).toBeDefined();
});
});

describe('ActivityTable component', () => {
it('renders correctly with data', () => {
const data = [
{
title: 'Activity 1',
description: 'Activity 1 description',
},
{
title: 'Activity 2',
description: 'Activity 2 description',
},
];
const { getByText } = render(<ActivityTable data={data} />);
expect(getByText('Activity')).toBeDefined();
expect(getByText('Activity Description')).toBeDefined();
expect(getByText('View Activity Details')).toBeDefined();
expect(getByText('Delete Activity')).toBeDefined();
expect(getByText('Activity 1')).toBeDefined();
expect(getByText('Activity 1 description')).toBeDefined();
expect(getByText('Activity 2')).toBeDefined();
expect(getByText('Activity 2 description')).toBeDefined();
});

it('does not render when there is no data', () => {
const { queryByTestId } = render(<ActivityTable />);
expect(queryByTestId('activity-table')).toBeNull();
});

it('calls editActivity when Edit icon is pressed', () => {
const editActivity = jest.fn();
const data = [
{
title: 'Activity 1',
description: 'Activity 1 description',
},
];
const { getByTestId } = render(
<ActivityTable data={data} editActivity={editActivity} />,
);
fireEvent.press(getByTestId('edit-icon-0'));
expect(editActivity).toHaveBeenCalledWith(data[0]);
});
});