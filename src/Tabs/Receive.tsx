import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Receive = () => {
  return (
    <View style={styles.container}>
      <Text>
        Receive
      </Text>
    </View>
  )
}

export default Receive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})