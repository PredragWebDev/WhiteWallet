import { GenerateWalletScreen, RecoverWalletScreen } from '@/AppNavigation';
import AppButton from '@/components/common/AppButton';
import AppLayout from '@/components/common/AppLayout';
import AppText from '@/components/common/AppText';
import theme from '@/constants/theme';
import { horizontalScale, verticalScale } from '@/helpers/scale';
import useAppNavigation from '@/hooks/useAppNavigation';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Welcome = () => {
    const navigation = useAppNavigation();

    return(
        <AppLayout>
            <View style={styles.logoContainer}>
                <AppText style={styles.logo}>Logo here</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton 
                    style={styles.walletButton}
                    text='GENERATE WALLET'
                    handleClick={() => navigation.navigate(GenerateWalletScreen)}
                />
                <AppButton 
                    style={styles.walletButton}
                    text='RECOVER WALLET'
                    type='secondary'
                    handleClick={() => navigation.navigate(RecoverWalletScreen)}
                />
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        paddingVertical: verticalScale(133),
        alignItems: 'center'
    },
    logo: {
        width: horizontalScale(278),
        height: verticalScale(230),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#A1A1A1',
        color: theme.colors.white
    },
    buttonContainer: {
        paddingBottom: verticalScale(20)
    },
    walletButton: {
        marginBottom: verticalScale(10)
    }
})

export default Welcome