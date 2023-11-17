import {View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-paper';
import theme from '@/constants/theme';

interface Props {
  value?: boolean;
  onToggleSwitch?: () => void;
  disabled?: boolean;
}
const AppToggleButton = ({
  value = false,
  onToggleSwitch = () => {},
  disabled = false,
}: Props) => {
  return (
    <View>
      <Switch
        value={value}
        onValueChange={onToggleSwitch}
        trackColor={{
          true: theme.colors.grey,
          false: theme.colors.grey,
        }}
        disabled={disabled}
        thumbColor={value ? theme.colors.iconGreen : theme.colors.white}
      />
    </View>
  );
};

export default AppToggleButton;
