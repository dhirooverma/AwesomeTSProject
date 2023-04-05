import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const Label = props => {
  return <Text style={styles.labelStyle}>{props.title}</Text>;
};

export default Label;
