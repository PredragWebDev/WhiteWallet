import { View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import theme from '@/constants/theme';

interface Props {
    value: boolean;
    onPress?: () => void;
    disabled?: boolean;
    color?: string;
    showBackground?: boolean;
    uncheckedColor?: string;
}

const AppCheckBox = ({
    value = false,
    onPress,
    color = theme.colors.white,
    disabled = false,
    uncheckedColor = theme.colors.white,
}: Props) => {
    return (
        <View>
            <Checkbox.Android
                status={value ? 'checked' : 'unchecked'}
                onPress={onPress}
                color={color}
                uncheckedColor={uncheckedColor}
                disabled={disabled}
            />
        </View>
    )
};

export default AppCheckBox;
