import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
                {data.activity}
              </Text>
            </View>
            <View style={styles.cellStyle1}>
              <Text numberOfLines={1} style={styles.bodyText}>
                {data.activity_description}
              </Text>
            </View>
            <View style={styles.cellStyle2}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {}}>
                <Ionicons
                  name="create-outline"
                  size={30}
                  color={color.PRIMARY_BLUE}
                />
                <Ionicons
                  name="eye-outline"
                  size={30}
                  color={color.PRIMARY_BLUE}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cellStyle2}>
              <TouchableOpacity onPress={() => {}}>
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
