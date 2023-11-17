import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import useAppNavigation from '@/hooks/useAppNavigation';
import { TabsScreen } from '@/AppNavigation';
import AppText from '@/components/common/AppText';
import AppButton from '@/components/common/AppButton';

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
            <AppText>Main Font Regular</AppText>
            <AppText textType='bold'>Main Font Bold</AppText>
            <AppText textType='light'>Main Font Light</AppText>
            <AppText fontFamily='Roboto' textType='bold'>Roboto Font Bold</AppText>
            <AppText fontFamily='Roboto' textType='light'>Roboto Font Light</AppText>
            <AppText fontFamily='Roboto'>Roboto Font Regular</AppText>
            <AppButton 
                text='primary button'
            />
            <AppButton 
                type='secondary'
                text='secondary button'
            />
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