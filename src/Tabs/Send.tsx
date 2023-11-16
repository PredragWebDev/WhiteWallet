import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Send = () => {
  return (
    <View style={styles.container}>
      <Text>
        Send
      </Text>
    </View>
  )
}

export default Send;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})