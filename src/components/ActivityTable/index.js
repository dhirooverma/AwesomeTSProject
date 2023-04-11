import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../utils/color';

const ActivityTable = props => {
  return (
    <View style={{borderWidth: 1}}>
      <View style={{flexDirection: 'row', backgroundColor: color.PRIMARY_BLUE}}>
        <View style={styles.cellStyle1}>
          <Text style={styles.headerText}>Activity</Text>
        </View>
        <View style={styles.cellStyle1}>
          <Text style={styles.headerText}>Activity Description</Text>
        </View>
        <View style={styles.cellStyle2}>
          <Text style={styles.headerText}>View Activity Details</Text>
        </View>
        <View style={styles.cellStyle2}>
          <Text style={styles.headerText}>Delete Activity</Text>
        </View>
      </View>
      {props.data &&
        props.data.map((data, ind) => (
          <View
            key={ind}
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.5,
            }}>
            <View style={styles.cellStyle1}>
              <Text numberOfLines={1} style={styles.bodyText}>
                {data.title}
              </Text>
            </View>
            <View style={styles.cellStyle1}>
              <Text numberOfLines={1} style={styles.bodyText}>
                {data.description}
              </Text>
            </View>
            <View style={styles.cellStyle2}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  onPress={() => {
                    props.editActivity(data);
                  }}
                  name="create-outline"
                  size={30}
                  color={color.PRIMARY_BLUE}
                />
                <Ionicons
                  name="eye-outline"
                  size={30}
                  color={color.PRIMARY_BLUE}
                  onPress={() => {
                    props.ViewActivity(data);
                  }}
                />
              </View>
            </View>
            <View style={styles.cellStyle2}>
              <TouchableOpacity
                onPress={() => {
                  props.deleteActivity(data.title);
                }}>
                <Ionicons
                  name="trash-outline"
                  size={30}
                  color={color.PRIMARY_BLUE}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
};

export default ActivityTable;
