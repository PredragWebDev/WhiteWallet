import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import useAppNavigation from '@/hooks/useAppNavigation';
import { TabsScreen } from '@/AppNavigation';
import AppText from '@/components/common/AppText';
import AppButton from '@/components/common/AppButton';
import AppNotification, { NotificationType } from '@/components/common/AppNotification';
import AppLayout from '@/components/common/AppLayout';

const Demo = () => {
    const navigation = useAppNavigation()
    return (
        <AppLayout barStyle="light-content">
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
            <AppButton 
                type='primary'
                text='primary button'
                size='small'
            />
            <AppButton 
                type='secondary'
                text='secondary button'
                size='small'
            />
            <AppNotification
            type={NotificationType.SUCCESS}
            title='Success!'
            content='Correct password.'
            />
            <AppNotification
            type={NotificationType.ERROR}
            title='Error!'
            content='Wrong password.'
            />
            <AppNotification
            type={NotificationType.WARNING}  
            content='Label is required'
            />
            <View style={{
                height: 400,
                backgroundColor: 'red'
            }}></View>
        </AppLayout>
    )
}

export default Demo;
