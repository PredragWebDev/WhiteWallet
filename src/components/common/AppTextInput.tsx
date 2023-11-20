import theme from "@/constants/theme";
import { horizontalScale } from "@/helpers/scale";
import React, { useState } from "react";
import { StyleSheet, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
    type?: 'default' | 'secure';
    icon?: "folder" | "lock" | "camera";
    disabled?: boolean;
    placeholder?: string;
    multiline?: boolean;
    style?: TextStyle;
    contentStyle?: TextStyle;
    value?: string;
    onChangeText?: (txt: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const AppTextInput = ({
    type = 'default',
    icon, 
    disabled = false,
    placeholder = 'Type here',
    multiline = false,
    style,
    contentStyle,
    value = '',
    onChangeText,
    onFocus = () => {},
    onBlur = () => {}
}: Props) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
        onFocus()
    }

    const handleBlur = () => {
        setFocused(false);
        onBlur()
    }

    return(
          <TextInput 
            disabled={disabled}
            right={(icon && <TextInput.Icon icon={icon} color={focused ? theme.colors.white : theme.colors.grey}/>)}
            placeholder={placeholder}
            underlineColor={theme.colors.grey}
            activeUnderlineColor={theme.colors.white}
            multiline={multiline}
            textColor={theme.colors.white}
            secureTextEntry={type === 'secure'}
            style={[styles.textInput, style]}
            contentStyle={[styles.contentStyle, contentStyle]}
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            dense
          />
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'transparent',
    },
    contentStyle: {
        fontFamily: theme.fontFamily.mainRegular,
        fontSize: horizontalScale(16),
    }
})

export default AppTextInput