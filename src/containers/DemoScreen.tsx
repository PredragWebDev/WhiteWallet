import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';
import { TabsScreen } from '../AppNavigation';

const Demo = () => {
    const navigation = useAppNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(TabsScreen)}>
                <Text>
                    Go To Tabs
                </Text>
            </TouchableOpacity>
            <Text>
                Demo
            </Text>
        </View>
    )
}

export default Demo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})