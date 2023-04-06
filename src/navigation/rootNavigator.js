import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateActivity from '../screens/CreateActivity';
import SearchActivity from '../screens/SerachActivity';

const StackNavigator = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Group
        screenOptions={{
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
            title: 'Search Activity',
            headerTitleStyle: {color: '#fff', fontSize: 20},
          }}
          name="SearchActivity"
          component={SearchActivity}
        />
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
};

export default RootNavigator;
