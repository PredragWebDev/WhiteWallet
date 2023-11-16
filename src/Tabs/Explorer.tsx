import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';
import { DemoScreen } from '../AppNavigation';

const Explorer = () => {
    const navigation = useAppNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(DemoScreen)}>
                <Text>
                    Go To Demo
                </Text>
            </TouchableOpacity>
            <Text>
                Explorer
            </Text>
        </View>
    )
}

export default Explorer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})