import ExpandIcon from '@/assets/icons/ExpandIcon';
import ExpandedIcon from '@/assets/icons/ExpandedIcon';
import SendIcon from '@/assets/icons/SendIcon';
import WalletFolderIcon from '@/assets/icons/WalletFolderIcon';
import AppText from '@/components/common/AppText';
import {IUserWallet} from '@/constants/DTO';
import theme from '@/constants/theme';
import {horizontalScale, verticalScale} from '@/helpers/scale';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MenuItem from './MenuItem';
import ReceiveIcon from '@/assets/icons/ReceiveIcon';
import CoinJoinIcon from '@/assets/icons/CoinJoinIcon';
import HistoryIcon from '@/assets/icons/HistoryIcon';
import AdvancedIcon from '@/assets/icons/AdvancedIcon';
import InfoIcon from '@/assets/icons/InfoIcon';
import TransactionIcon from '@/assets/icons/TransactionIcon';

const rate = 50000;

interface Props {
  wallet: IUserWallet;
}
const WalletExplorer = ({wallet}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [advancedExpanded, setAdvancedExpanded] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setExpanded(prev => !prev)}>
        <View
          style={[
            styles.titleContainer,
            expanded
              ? {
                  backgroundColor: theme.colors.grey,
                }
              : {},
          ]}>
          {expanded ? <ExpandedIcon /> : <ExpandIcon />}
          <WalletFolderIcon style={styles.walletIcon} />
          <AppText style={styles.text}>
            {`${wallet.name} (${wallet.balance}BTC / ${
              wallet.balance * rate
            }$)`}{' '}
          </AppText>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.subContainer}>
          <MenuItem
            icon={
              <SendIcon
                width={horizontalScale(23.5)}
                height={horizontalScale(22)}
                focused
                style={styles.sendIcon}
              />
            }
            text="Send"
          />
          <MenuItem
            icon={
              <ReceiveIcon
                width={horizontalScale(20)}
                height={horizontalScale(19)}
                focused
                style={styles.receiveIcon}
              />
            }
            text="Receive"
          />
          <MenuItem
            icon={
              <CoinJoinIcon
                width={horizontalScale(20.5)}
                height={horizontalScale(18)}
                focused
              />
            }
            text="CoinJoin"
          />
          <MenuItem icon={<HistoryIcon />} text="History" />
          <View style={styles.advancedContainer}>
            <View style={styles.advancedExpandIconContainer}>
              {advancedExpanded ? <ExpandedIcon /> : <ExpandIcon />}
            </View>
            <MenuItem
              icon={<AdvancedIcon />}
              text="Advanced"
              handleClick={() => setAdvancedExpanded(prev => !prev)}
            />
          </View>
          {advancedExpanded && (
            <View style={styles.advancedSubContainer}>
              <MenuItem icon={<InfoIcon />} text="Wallet Info" />
              <MenuItem icon={<TransactionIcon />} text="Build Transaction" />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -horizontalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  titleContainer: {
    marginHorizontal: -horizontalScale(16),
    paddingLeft: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    marginLeft: horizontalScale(15),
    marginRight: horizontalScale(9),
  },
  text: {
    fontSize: horizontalScale(16),
    lineHeight: horizontalScale(20),
    paddingVertical: horizontalScale(8),
  },
  subContainer: {
    paddingLeft: horizontalScale(54),
  },
  sendIcon: {
    marginLeft: 0,
    marginRight: horizontalScale(-5),
  },
  receiveIcon: {
    marginLeft: -horizontalScale(4.5),
    marginRight: horizontalScale(3),
  },
  advancedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  advancedExpandIconContainer: {
    position: 'absolute',
    left: -horizontalScale(18),
  },
  advancedSubContainer: {
    paddingLeft: horizontalScale(28),
  },
});

export default WalletExplorer;
