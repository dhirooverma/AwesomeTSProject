import React from 'react';
import {TextInput} from 'react-native';
import Color from '../../utils/color';
import PropTypes from 'prop-types';
import styles from './styles';

const InputText = props => {
  return (
    <TextInput
      {...props}
      autoCorrect={props.autoCorrect ? props.autoCorrect : false}
      style={[
        styles.textFieldStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: props.editable ? Color.WHITE : Color.CELL_BACKGROUND,
          borderColor: props.error ? Color.RED_GRADIENT : Color.LIGHT_BLUE,
          borderWidth: props.error ? 2 : 1,
          height: props.multiline ? 60 : 40,
        },
        props.style,
      ]}
      maxLength={props.maxLength}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};

InputText.defaultProps = {
  editable: true,
  shouldChangePlaceholderColor: false,
};
InputText.propTypes = {
  editable: PropTypes.bool,
  shouldChangePlaceholderColor: PropTypes.bool,
};

export default InputText;
