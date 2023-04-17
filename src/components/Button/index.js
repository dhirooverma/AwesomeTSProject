import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const Button = props => {
  return (
    <TouchableOpacity testID='button' style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
