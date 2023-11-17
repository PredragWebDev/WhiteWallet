import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigation from './AppNavigation';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </PaperProvider>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})