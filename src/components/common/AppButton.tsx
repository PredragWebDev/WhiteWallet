import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText';
import { horizontalScale } from '@/helpers/scale';
import theme from '@/constants/theme';
 
interface AppButtonProps {
    handleClick?: () => void;
    text?: string,
    type?: 'primary' | 'secondary',
    size?: 'large' | 'small' 
}

const AppButton = ({handleClick = () => {}, text = '', type = 'primary', size = 'large'}: AppButtonProps) => {
    return(
        <TouchableOpacity onPress={handleClick} style={[styles.container, {
            backgroundColor: type === 'primary' ? theme.colors.wwGreen : theme.colors.wwYellow,
            borderRadius: size === 'large' ? horizontalScale(6) : horizontalScale(2)
        }]}>
            <AppText textType={size === 'large' ? 'regular' : 'bold'} fontFamily={size === 'large' ? 'main' : 'Roboto'} style={styles.text}>
                {text}
            </AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: horizontalScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: theme.colors.white
    }
})

export default AppButton