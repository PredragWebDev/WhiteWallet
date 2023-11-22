import ExpandIcon from '@/assets/icons/ExpandIcon';
import ExpandedIcon from '@/assets/icons/ExpandedIcon';
import WalletFolderIcon from '@/assets/icons/WalletFolderIcon';
import AppText from '@/components/common/AppText';
import {IUserWallet} from '@/constants/DTO';
import theme from '@/constants/theme';
import { horizontalScale } from '@/helpers/scale';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const rate = 50000

interface Props {
  wallet: IUserWallet;
}
const WalletExplorer = ({wallet}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [advancedExpanded, setAdvancedExpanded] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setExpanded(prev => !prev)}>
        <View style={[styles.titleContainer, expanded ? {
            backgroundColor: theme.colors.grey
        } : {}]}>
          {expanded ? <ExpandedIcon /> : <ExpandIcon />}
          <WalletFolderIcon style={styles.walletIcon} />
          <AppText style={styles.text}>{`${wallet.name} (${wallet.balance}BTC / ${wallet.balance * rate}$)`} </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -horizontalScale(16),
    paddingHorizontal: horizontalScale(16)
  },
  titleContainer: {
    marginHorizontal: -horizontalScale(16),
    paddingLeft: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    marginLeft: horizontalScale(15),
    marginRight: horizontalScale(9)
  },
  text: {
    fontSize: horizontalScale(16),
    lineHeight: horizontalScale(20),
    paddingVertical: horizontalScale(8)
  }
});

export default WalletExplorer;
