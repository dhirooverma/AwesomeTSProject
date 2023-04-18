import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import styles from './styles';

const AlertBox = ({
  title,
  message,
  visible,
  onPressOK,
  onPressCancel,
  needCancelButton,
  okayText,
}) => {
  const needCancel = true;

  return (
    <Modal transparent={true} visible={visible} testID="alertBox" >
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <Text style={styles.title} >{title}</Text>
          <Text style={styles.message} >{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.okButton} onPress={onPressOK}>
              <Text style={styles.okText}>{okayText}</Text>
            </TouchableOpacity>

            { needCancel==needCancelButton?
            <TouchableOpacity
            testID='deleteConfirmationAlert'
              style={styles.cancelButton}
              onPress={onPressCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>:null}

          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertBox;
