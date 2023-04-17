import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ActivityTable from '../../../src/components/ActivityTable/index';
import {getActivityFormData} from '../../../src/controller/activityData';
// import {SELECTBOX_DEFAULT_LABEL, delay} from '../utils/constants';

console.log(getActivityFormData)

describe('ActivityTable', () => {
  const data = [
    {
      title: 'Activity 1',
      description: 'Description for Activity 1',
    },
    {
      title: 'Activity 2',
      description: 'Description for Activity 2',
    },
  ];

  it('renders the header correctly', () => {
    const {getByText} = render(<ActivityTable data={data} />);
    expect(getByText('Activity')).not.toBeNull();
    expect(getByText('Activity Description')).not.toBeNull();
    expect(getByText('View Activity Details')).not.toBeNull();
    expect(getByText('Delete Activity')).not.toBeNull();
  });

  it('renders the data correctly', () => {
    const {getByText} = render(<ActivityTable data={data} />);
    expect(getByText('Activity 1')).not.toBeNull();
    expect(getByText('Description for Activity 1')).not.toBeNull();
    expect(getByText('Activity 2')).not.toBeNull();
    expect(getByText('Description for Activity 2')).not.toBeNull();
  });

  it('calls the editActivity function when the edit icon is pressed', () => {
    const editActivity = jest.fn();
    const {queryAllByTestId} = render(
      <ActivityTable data={data} editActivity={editActivity} />,
    );
    const editIcons = queryAllByTestId('edit-icon-0');
    fireEvent.press(editIcons[0]);
    expect(editActivity).toHaveBeenCalledWith(data[0]);
  });

  it('calls the ViewActivity function when the view icon is pressed', () => {
    const viewActivity = jest.fn();
    const {queryAllByTestId} = render(
      <ActivityTable data={data} ViewActivity={viewActivity} />,
    );
   
    const viewIcons = queryAllByTestId('view-icon-0');
    fireEvent.press(viewIcons[0]);;
    expect(viewActivity).toHaveBeenCalledWith(data[0]);
  });

  it('calls the deleteActivity function when the delete icon is pressed', () => {
    const deleteActivity = jest.fn();
    const {queryAllByTestId} = render(
      <ActivityTable data={data} deleteActivity={deleteActivity} />,
    );

     const deleteIcons = queryAllByTestId('delete-icon-0');
     fireEvent.press(deleteIcons[0]);
    expect(deleteActivity).toHaveBeenCalledWith(data[0]);
  });
});
