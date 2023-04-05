import {Picker} from '@react-native-picker/picker';
import React, {useState, useMemo, useCallback} from 'react';
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/color';

const SelectBox = props => {
  const [selectedValue, setSelectedValue] = useState(props.preSelected);
  const [isVisible, setVisible] = useState(false);

  const androidView = useMemo(() => {
    return (
      <Picker
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.selectBox,
          backgroundColor: props.disabled
            ? 'rgba(256,256,256,0.1)'
            : colors.WHITE,
        }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.onValueChange(itemValue, itemIndex);
        }}
        enabled={!props.disabled}>
        {props.children}
      </Picker>
    );
  }, [selectedValue, props]);

  const openModal = useCallback(() => {
    if (!props.disabled) {
      setVisible(true);
    }
  }, [props.disabled]);

  const closeModal = () => {
    setVisible(false);
  };

  const iosView = useMemo(() => {
    return (
      <>
        <Pressable
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.selectBox,
            backgroundColor: props.disabled
              ? 'rgba(256,256,256,0.1)'
              : colors.WHITE,
          }}
          onPress={openModal}
          android_ripple={{color: 'green'}}>
          <Text
            style={{
              ...styles.selectBoxText,
              color: props.disabled ? colors.GRAY : colors.BLACK,
            }}>
            {selectedValue.toUpperCase()}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={props.disabled ? colors.GRAY : colors.BLACK}
          />
        </Pressable>
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          animationType="slide"
          transparent={true}
          visible={isVisible}
          style={styles.modalView}
          // onDismiss={() => { setSelectedValue(itemValue) }}
          // onOrientationChange={(evnt) => {
          //     console.log(evnt);
          // }}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainerStyle}>
              <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
                <View style={styles.modalContent}>
                  <Picker
                    style={{justifyContent: 'center', height: '100%'}}
                    {...props}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedValue(itemValue);
                      props.onValueChange(itemValue, itemIndex);
                    }}>
                    {props.children}
                  </Picker>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
    );
  }, [isVisible, selectedValue, openModal, props]);
  return Platform.OS === 'android' ? androidView : iosView;
};

export default SelectBox;
