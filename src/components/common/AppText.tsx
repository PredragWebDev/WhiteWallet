import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';
import theme from '@/constants/theme';

interface AppTextProps {
  children: React.ReactNode;
  textType?: 'bold' | 'light' | 'regular';
  fontFamily?: 'main' | 'Roboto';
  style?: TextStyle | TextStyle[];
  textProps?: TextProps;
}

const AppText = ({
  children,
  textType = 'regular',
  fontFamily = 'main',
  style,
  textProps,
}: AppTextProps) => {
  let textStyle: object;
  switch (textType) {
    case 'regular':
      textStyle = fontFamily === 'Roboto' ? styles.regularRoboto : styles.regular;
      break;
    case 'light':
      textStyle = fontFamily === 'Roboto' ? styles.lightRoboto : styles.light;
      break;
    case 'bold':
      textStyle = fontFamily === 'Roboto' ? styles.boldRoboto : styles.bold;
      break;
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Text
      style={[styles.basicStyles, textStyle, {...passedStyles}]}
      {...textProps}>
      {children}
    </Text>
  );
};

export default AppText

const styles = StyleSheet.create({
  basicStyles: {
    color: theme.colors.white,
  },
  light: {
    fontFamily: theme.fontFamily.mainLight,
  },
  bold: {
    fontFamily: theme.fontFamily.mainBold,
  },
  regular: {
    fontFamily: theme.fontFamily.mainRegular,
  },
  lightRoboto: {
    fontFamily: theme.fontFamily.RobotoLight,
  },
  boldRoboto: {
    fontFamily: theme.fontFamily.RobotoBold,
  },
  regularRoboto: {
    fontFamily: theme.fontFamily.RobotoRegular,
  },
});
