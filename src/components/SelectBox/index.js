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
import {SELECTBOX_DEFAULT_LABEL} from '../../utils/constants';

const SelectBox = props => {
  const [selectedValue, setSelectedValue] = useState(props.preSelected);
  const [isVisible, setVisible] = useState(false);

  const renderOptions = useCallback(data => {
    const options = [
      <Picker.Item
        label={SELECTBOX_DEFAULT_LABEL}
        value={SELECTBOX_DEFAULT_LABEL}
      />,
    ];
    if (data && Array.isArray(data)) {
      data.forEach(option => {
        options.push(<Picker.Item label={option.name} value={option.value} />);
      });
    }
    return options;
  }, []);

  const androidView = useMemo(() => {
    return (
      <Picker
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.selectBox,
          borderColor: props.error ? 'red' : colors.LIGHT_BLUE,
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
        {renderOptions(props.data)}
      </Picker>
    );
  }, [selectedValue, props, renderOptions]);

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
            borderColor: props.error ? 'red' : colors.LIGHT_BLUE,
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
          style={styles.modalView}>
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
                    {renderOptions(props.data)}
                  </Picker>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
    );
  }, [isVisible, selectedValue, openModal, props, renderOptions]);
  return (
    <View>
      {Platform.OS === 'android' ? androidView : iosView}
      {props.errorMessage && (
        <Text style={{color: 'red'}}>{props.errorMessage}</Text>
      )}
    </View>
  );
};

export default SelectBox;
