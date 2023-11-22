import {GenerateWalletScreen, RecoverWalletScreen} from '@/AppNavigation';
import EyeIcon from '@/assets/icons/EyeIcon';
import StackMinusIcon from '@/assets/icons/StackMinusIcon';
import StackPlusIcon from '@/assets/icons/StackPlusIcon';
import WalletExplorer from '@/components/Explorer/MainExplorer/WalletExplorer';
import AppLayout from '@/components/common/AppLayout';
import AppText from '@/components/common/AppText';
import Header from '@/components/common/Header';
import StatusBar from '@/components/common/StatusBar';
import {horizontalScale, verticalScale} from '@/helpers/scale';
import useAppNavigation from '@/hooks/useAppNavigation';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const rate = 50000;
const wallets = [
  {
    name: 'Wallet 1',
    balance: 0.01,
  },
  {
    name: 'Wallet 2',
    balance: 0.01,
  },
];

const MainExplorer = () => {
  const navigation = useAppNavigation();

  return (
    <AppLayout noPadding>
      <View style={styles.constainer}>
        <StatusBar peers={12} BTS2USD={5000} />
        <Header title="Wallet Explorer" withStatusBar />
        <View style={styles.toolBar}>
          <TouchableOpacity>
            <EyeIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <StackMinusIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(GenerateWalletScreen)}>
          <View style={styles.container}>
            <StackPlusIcon />
            <AppText style={styles.text}>Generate Wallet</AppText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RecoverWalletScreen)}>
          <View style={styles.container}>
            <StackPlusIcon />
            <AppText style={styles.text}>Recover Wallet</AppText>
          </View>
        </TouchableOpacity>

        {wallets.map(item => (
          <WalletExplorer key={item.name} wallet={item} />
        ))}
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  constainer: {
    paddingHorizontal: horizontalScale(16),
  },
  toolBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: horizontalScale(15),
    marginTop: verticalScale(-6),
    marginBottom: verticalScale(16),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(12),
    paddingVertical: verticalScale(8),
    paddingLeft: horizontalScale(28),
  },
  text: {
    fontSize: horizontalScale(16),
    lineHeight: horizontalScale(20),
  },
});

export default MainExplorer;
