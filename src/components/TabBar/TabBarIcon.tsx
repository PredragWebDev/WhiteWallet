import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {SvgProps} from 'react-native-svg';
import {View} from 'react-native';
import { CoinJoinScreen, ExplorerScreen, ReceiveScreen, SendScreen, SettingsScreen } from '@/AppNavigation';
import ExploerIcon from '@/assets/icons/ExplorerIcon';
import SendIcon from '@/assets/icons/SendIcon';
import ReceiveIcon from '@/assets/icons/ReceiveIcon';
import CoinJoinIcon from '@/assets/icons/CoinJoinIcon';
import SettingsIcon from '@/assets/icons/SettingsIcon';

export interface TabIconProps extends SvgProps {
  focused?: boolean;
}

interface Props {
  route: RouteProp<ParamListBase, string>;
  focused: boolean;
}

const TabBarIcon = ({route, focused}: Props) => {
  switch (route.name) {
    case ExplorerScreen:
      return <ExploerIcon focused={focused} />;
    case SendScreen:
      return <SendIcon focused={focused} />;
    case ReceiveScreen:
      return <ReceiveIcon focused={focused} />;
    case CoinJoinScreen:
      return <CoinJoinIcon focused={focused} />;
    case SettingsScreen:
      return <SettingsIcon focused={focused} />;
    default:
      return <View />;
  }
};

export default TabBarIcon;
