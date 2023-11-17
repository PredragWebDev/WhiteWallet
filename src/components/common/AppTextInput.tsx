import theme from "@/constants/theme";
import { horizontalScale } from "@/helpers/scale";
import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
    type?: 'default' | 'secure';
    icon?: "folder" | "lock" | "camera";
    disabled?: boolean;
    placeholder?: string;
    multiline?: boolean;
    style?: TextStyle;
    onChangeText?: (txt: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const AppTextInput = ({
    type = 'default',
    icon = 'folder', 
    disabled = false,
    placeholder = 'Type here',
    multiline = false,
    style,
    onChangeText,
    onFocus,
    onBlur
}: Props) => {
    return(
          <TextInput 
            disabled={disabled}
            right={<TextInput.Icon icon={icon} color={icon === 'camera' ? theme.colors.white : theme.colors.grey}/>}
            placeholder={placeholder}
            underlineColor={theme.colors.grey}
            activeUnderlineColor={theme.colors.white}
            multiline={multiline}
            textColor={theme.colors.white}
            secureTextEntry={type === 'secure'}
            style={[styles.textInput, style]}
            contentStyle={styles.contentStyle}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
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