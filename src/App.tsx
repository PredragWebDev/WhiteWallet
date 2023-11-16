import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigation from './AppNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})