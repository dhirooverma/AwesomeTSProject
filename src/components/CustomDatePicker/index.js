import React, {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import color from '../../utils/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import styles from './styles';
import Label from '../../components/Label';

const CustomDatePicker = props => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  /**
   * dateLocaleFormat
   * converts date to locale format
   * @param date
   * @param datePreference
   */
  const dateLocaleFormat = date => {
    return moment(date).format('DD-MMM-YYYY');
  };

  return (
    <View style={{}}>
      {props.pickerLabel && (
        <Label title={props.pickerLabel ?? 'Choose a date'} />
      )}

      <Pressable
        style={styles.container}
        accessible
        onPress={() => {
          setShowDatePicker(true);
        }}>
        <View style={styles.dateContainer}>
          <View style={styles.calenderIcon}>
            <FontAwesome5
              name="calendar-alt"
              style={styles.listItemSelectedIcon}
              size={25}
              color={color.LIGHT_BLUE}
            />
          </View>

          <View style={styles.calenderPlaceHolder}>
            {props.defaultDate && (
              <Text style={styles.fontStyle}>
                {dateLocaleFormat(props.defaultDate)}
              </Text>
            )}
          </View>
        </View>
      </Pressable>

      <DatePicker
        modal
        mode="date"
        open={showDatePicker}
        date={props.defaultDate || new Date()}
        minimumDate={new Date()}
        onConfirm={date => {
          setShowDatePicker(false);
          props.updateFormValue(props.name, date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </View>
  );
};

export default CustomDatePicker;
