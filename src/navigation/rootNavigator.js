import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateActivity from '../screens/CreateActivity';
import SearchActivity from '../screens/SerachActivity';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {TouchableOpacity} from 'react-native';
import CreateWeeklyPlan from '../screens/CreateWeeklyPlan';
import ViewEditActivity from '../screens/ViewEditActivity';

const StackNavigator = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Group
        screenOptions={{
          // Need to modify the left button color or change the custom icon
          // headerLeft: ({canGoBack, onPress}) =>
          //   canGoBack && (
          //     <TouchableOpacity onPress={onPress}>
          //       <Ionicons
          //         name="chevron-back-outline"
          //         size={30}
          //         color={'#fff'}
          //       />
          //     </TouchableOpacity>
          //   ),
          headerStyle: {backgroundColor: '#4A87A9'},
        }}>
        <StackNavigator.Screen
          options={{
            title: 'Create Activity',
            headerTitleStyle: {color: '#fff', fontSize: 20},
          }}
          name="CreateActivity"
          component={CreateActivity}
        />
        <StackNavigator.Screen
          options={{
            headerBackTitleVisible: false,
            title: 'Search Activity',
            headerTitleStyle: {color: '#fff', fontSize: 30},
          }}
          name="SearchActivity"
          component={SearchActivity}
        />
        <StackNavigator.Screen
          options={{
            title: 'View Activity',
            headerTitleStyle: {color: '#fff', fontSize: 20},
          }}
          name="ViewEditActivity"
          component={ViewEditActivity}
        />
        <StackNavigator.Screen
          options={{
            headerBackTitleVisible: false,
            title: 'Create Weekly Plan',
            headerTitleStyle: {color: '#fff', fontSize: 30},
          }}
          name="CreateWeeklyPlan"
          component={CreateWeeklyPlan}
        />
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
};

export default RootNavigator;
