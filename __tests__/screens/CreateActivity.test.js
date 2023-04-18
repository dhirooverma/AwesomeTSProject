// // import React from 'react';
// // import {render, fireEvent} from '@testing-library/react-native';
// // import CreateActivity from '../../src/screens/CreateActivity';

// // describe('CreateActivity component', () => {
// //   test('onSubmit handler is called with the form values and sets loading state to true', () => {
// //     const onSubmitMock = jest.fn(formValues => {
// //       console.log('onSubmitMock called with formValues:', formValues);
// //     });
// //     const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);
// //     const formValues = {title: 'Test name'};

// //     fireEvent.changeText(getByTestId('nameInput'), formValues.title);
// //     // fireEvent.changeText(
// //     //   getByTestId('descriptionInput'),
// //     //   formValues.description,
// //     // );
// //     fireEvent.press(getByTestId('submitButton'));

// //     expect(onSubmitMock).toHaveBeenCalledWith(formValues);
// //     expect(getByTestId('loadingIndicator')).toBeTruthy();
// //   });

// //   test('useEffect hook sets loading state to false after submission', () => {
// //     const onSubmitMock = jest.fn();
// //     const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);
// //     const formValues = {name: 'Test name', description: 'Test description'};

// //     fireEvent.changeText(getByTestId('nameInput'), formValues.name);
// //     fireEvent.changeText(
// //       getByTestId('descriptionInput'),
// //       formValues.description,
// //     );
// //     fireEvent.press(getByTestId('submitButton'));

// //     expect(getByTestId('loadingIndicator')).toBeTruthy();

// //     setTimeout(() => {
// //       expect(getByTestId('loadingIndicator')).toBeFalsy();
// //     }, 3000); // Assumes the loading indicator disappears after 3 seconds
// //   });
// // });

// import React from 'react';
// import {render, fireEvent, waitFor} from '@testing-library/react-native';
// import CreateActivity from '../../src/screens/CreateActivity';

// describe('CreateActivity component', () => {
//   it('onSubmit handler is called with the form values and sets loading state to true', async () => {
//     const onSubmitMock = jest.fn();
//     const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);

//     const formValues = {
//       // class: '1',
//       // keywords: 'jjjj',
//       // library: '1',
//       // select_scale: '2',
//       title: 'hhhhhhhvhvr'
//       // type: '2',
//     };

//     fireEvent.changeText(getByTestId('titleInput'), formValues.title);
//     // fireEvent.changeText(
//     //   getByTestId('descriptionInput'),
//     //   formValues.description,
//     // );
//     fireEvent.press(getByTestId('submitButton'));

//     eexpect(onSubmitMock).toHaveBeenCalledWith(
//       expect.objectContaining({
//         title: 'Test name',
//       }),
//     );

//     expect(getByTestId('loadingIndicator')).toBeTruthy();
//   });

//   it('useEffect hook sets loading state to false after submission', async () => {
//     const onSubmitMock = jest.fn();
//     const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);

//     const formValues = {

//       title: 'hhhhhhhvhvr',

//     };

//     fireEvent.changeText(getByTestId('titleInput'), formValues.title);
//     // fireEvent.changeText(
//     //   getByTestId('descriptionInput'),
//     //   formValues.description,
//     // );
//     fireEvent.press(getByTestId('submitButton'));

//     // Wait for the loading state to be set to false
//      setTimeout(() => {
//       expect(getByTestId('loadingIndicator')).toBeFalsy();
//     }, 3000);
//   });
// });

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useForm, Controller} from 'react-hook-form';
import CreateActivity from '../../src/screens/CreateActivity';
import InputText from '../../src/components/InputText';
import SelectBox from '../../src/components/SelectBox';
import Label from '../../src/components/Label';
import Button from '../../src/components/Button';

describe('CreateActivity component', () => {
  // it('onSubmit handler is called with the form values and sets loading state to true', async () => {
  //   const onSubmitMock = jest.fn();
  //   const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);

  //   const formValues = {
  //     title: 'hhhhhhhvhvr',
  //   };

  //   fireEvent.changeText(getByTestId('inputText'), formValues.title);
  //   fireEvent.press(getByTestId('button'));

  //   expect(onSubmitMock).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       title: 'Test name',
  //     }),
  //   );
  //   expect(getByTestId('loadingIndicator')).toBeTruthy();
  // });

  it('useEffect hook sets loading state to false after submission', async () => {
    const onSubmitMock = jest.fn();
    const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);

    const formValues = {
      title: 'hhhhhhhvhvr',
    };

    fireEvent.changeText(getByTestId('activityInput'), formValues.title);
    // fireEvent.changeText(
    //   getByTestId('descriptionInput'),
    //   formValues.description,
    // );
    fireEvent.press(getByTestId('button'));

    // Wait for the loading state to be set to false
    setTimeout(() => {
      expect(getByTestId('loadingIndicator')).toBeFalsy();
    }, 3000);
  });
});
describe('CreateActivity', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<CreateActivity />);
    expect(getByTestId('createActivity')).toBeDefined();
  });
  it('should update the state when input text is changed', () => {
    const {getByTestId} = render(<CreateActivity testID="activityInput" />);
    const input = getByTestId('activityInput');
    fireEvent.changeText(input, 'New Activity');
    expect(input.props.value).toBe('New Activity');
  });

  // it('should call the onSubmit prop when the submit button is pressed', () => {
  //   const onSubmitMock = jest.fn();
  //   const {getByTestId} = render(<CreateActivity onSubmit={onSubmitMock} />);
  //   const submitButton = getByTestId('button');
  //   fireEvent.press(submitButton);
  //   expect(onSubmitMock).toHaveBeenCalledTimes(1);
  // });

  // it('should pass the correct activity name to the onSubmit prop when the submit button is pressed', () => {
  //   const onSubmitMock = jest.fn();
  //   const {getByTestId} = render(
  //     <CreateActivity onSubmit={onSubmitMock} testID="activityInput" />,
  //   );
  //   const input = getByTestId('activityInput');
  //   fireEvent.changeText(input, 'New Activity');
  //   const submitButton = getByTestId('button');
  //   fireEvent.press(submitButton);
  //   expect(onSubmitMock).toHaveBeenCalledWith('New Activity');
  // // });
  // it('should call the onSubmit prop when the submit button is pressed', () => {
  //   const onSubmitMock = jest.fn();
  //   const {getByTestId} = render(
  //     <CreateActivity onSubmit={onSubmitMock} control={useForm().control} />,
  //   );
  //   const submitButton = getByTestId('button');
  //   fireEvent.press(submitButton);
  //   expect(onSubmitMock).toHaveBeenCalledTimes(1);
  // });

});

describe('InputText', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<InputText testID="activityInput" />);
    const input = getByTestId('activityInput');
    expect(input).toBeDefined();
  });

  it('should call onChangeText function when text input changes', () => {
    const onChangeText = jest.fn();
    const {getByTestId} = render(
      <InputText
        title="Name"
        onChangeText={onChangeText}
        testID="activityInput"
      />,
    );
    const input = getByTestId('activityInput');
    fireEvent.changeText(input, 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });
  //new codes
  it('should render correctly with default props', () => {
    const {getByTestId} = render(<InputText testID="inputText" />);
    const input = getByTestId('inputText');
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
      <InputText onFocus={onFocus} onBlur={onBlur} testID="inputText" />,
    );
    const input = getByTestId('inputText');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});

describe('SelectBox', () => {
  const options = [
    {key: '1', value: 'Option 1'},
    {key: '2', value: 'Option 2'},
    {key: '3', value: 'Option 3'},
  ];

  it('renders correctly', () => {
    const {getByTestId} = render(<SelectBox data={options} />);
    expect(getByTestId('selectBox')).toBeDefined();
  });
  it('renders the default value correctly', () => {
    const preSelected = '2';
    const {getByTestId} = render(
      <SelectBox
        data={options}
        testID="selectBoxText"
        preSelected={preSelected}
      />,
    );
    const selectBoxText = getByTestId('selectBoxText');
    expect(selectBoxText.children[0]).toEqual('OPTION 2');
  });

  it('should display selected option label when an option is selected', () => {
    const {getByTestId} = render(
      <SelectBox data={options} preSelected="2" testID="selectBoxText" />,
    );
    const selectBoxText = getByTestId('selectBoxText');
    expect(selectBoxText.props.children).toEqual('OPTION 2');
  });

  // it('should call onValueChange function when an option is selected', () => {
  //   const onValueChange = jest.fn();
  //   const {getByTestId} = render(
  //     <SelectBox
  //       data={options}
  //       onValueChange={onValueChange}
  //       testID="selectBoxText"
  //     />,
  //   );
  //   const selectBox = getByTestId('selectBoxText');
  //   fireEvent(selectBox, 'valueChange', '2', 1);
  //   expect(onValueChange).toHaveBeenCalledWith('2', 1);
  // });
});

describe('Label', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Label title="Name" testID="label" />);
    expect(getByTestId('label')).toBeDefined();
  });
});

describe('Button', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Button title="Submit" testID="button" />);
    expect(getByTestId('button')).toBeDefined();
  });

  it('should call onPress function when button is pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button title="Submit" onPress={onPress} testID="button" />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});




const TestComponent = ({onSubmitMock}) => {
  const {control} = useForm();
  return <CreateActivity onSubmit={onSubmitMock} control={control} />;
};
