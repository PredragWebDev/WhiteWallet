import React from 'react'
import AppText from './AppText';
import { StyleSheet, View } from 'react-native';
import theme from '@/constants/theme';
import { horizontalScale, verticalScale } from '@/helpers/scale';

export enum NotificationType {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

interface Props {
    type: NotificationType;
    title?: string;
    content: string;
}

const AppNotification = ({type, title, content}: Props ) => {
    let bgColor: string;
    switch (type) {
        case NotificationType.SUCCESS:
            bgColor = theme.colors.notificationGreen
            break;
        case NotificationType.WARNING:
            bgColor = theme.colors.notificationYellow
            break;
        case NotificationType.ERROR:
            bgColor = theme.colors.wwRed
            break;
    }
    return(
        <View style={[styles.container, {
            backgroundColor: bgColor
        }]}>
            {title && <AppText style={styles.text}>{title}</AppText>}
            <AppText style={styles.text}>{content}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(16),
        paddingVertical: verticalScale(20),
        width: '100%',
        gap: verticalScale(10)
    },

    text: {
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        color: theme.colors.white, 
    }
})

export default AppNotification;