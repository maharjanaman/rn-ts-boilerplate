/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WOLO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1/2,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize: 20,
  }
});

export default App;
