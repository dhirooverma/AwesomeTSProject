/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import CreateActivity from './src/screens/CreateActivity';

function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#4A87A9'}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Create Activity</Text>
      </View>
      <CreateActivity />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A87A9',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default App;
