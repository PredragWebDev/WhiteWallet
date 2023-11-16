import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>
        Settings
      </Text>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})