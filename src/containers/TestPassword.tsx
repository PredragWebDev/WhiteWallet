import { TabsScreen } from '@/AppNavigation';
import AppButton from '@/components/common/AppButton';
import AppLayout from '@/components/common/AppLayout';
import AppNotification, { NotificationType } from '@/components/common/AppNotification';
import AppText from '@/components/common/AppText';
import AppTextInput from '@/components/common/AppTextInput';
import Header from '@/components/common/Header';
import theme from '@/constants/theme';
import { horizontalScale, verticalScale } from '@/helpers/scale';
import useAppNavigation from '@/hooks/useAppNavigation';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

enum TestResult {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    PENDING = 'PENDING'
}

const wallets = ['Wallet1', 'Wallet2', 'Wallet3']

const TestPassword = () => {
    const navigation = useAppNavigation();

    const [testReesult, setTestResult] = useState<TestResult>(TestResult.PENDING)
    const [selectedWalletIndex, setSelectedWalletIndex] = useState<number | null>(null)

    const testPassword = () => {
        if(testReesult === TestResult.PENDING){
            setTestResult(TestResult.SUCCESS)
        }
        if(testReesult === TestResult.SUCCESS){
            setTestResult(TestResult.ERROR)
        }
        if(testReesult === TestResult.ERROR){
            setTestResult(TestResult.PENDING)
        }
    }

    const loadWallet = () => {
        navigation.navigate(TabsScreen)
    }

    const Notification = () => {
        if (testReesult === TestResult.PENDING)
            return (
                <View style={styles.blankNotification}></View>
            )
        if (testReesult === TestResult.SUCCESS)
            return (
                <AppNotification
                    type={NotificationType.SUCCESS}
                    title='Success!'
                    content='Correct password.'
                />
            )
        if (testReesult === TestResult.ERROR)
            return (
                <AppNotification
                    type={NotificationType.ERROR}
                    title='Error!'
                    content='Wrong password.'
                />
            )
    }

    return (
        <AppLayout noPadding>
            <Header
                title='Test Password'
            />
            <View style={styles.container}>
                <View style={styles.walletsContainer}>
                    <AppText style={styles.walletText}>
                        Add wallet
                    </AppText>
                    {wallets.map((item, index) => (
                        <AppText style={[styles.walletText, selectedWalletIndex === index ? styles.selectedWallet : {}]} key={index} textProps={{
                            onPress: () => setSelectedWalletIndex(index)
                        }}>
                            {item}
                        </AppText>
                    ))}
                </View>

                <AppText style={styles.selectText}>
                    Select a wallet to test password
                </AppText>
                <AppTextInput
                    style={styles.passwordInput}
                    placeholder='Enter password'
                    type='secure'
                />

                <View style={styles.notificationContainer}>
                    <Notification />
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton
                        type='secondary'
                        text='LOAD WALLET'
                        style={styles.button}
                        handleClick={loadWallet}
                    />
                    <AppButton
                        text='TEST PASSWORD'
                        style={styles.button}
                        handleClick={testPassword}
                    />
                </View>
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(16)
    },
    walletsContainer: {
        marginTop: verticalScale(30),
    },
    walletText: {
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        paddingVertical: verticalScale(5),
        marginHorizontal: -horizontalScale(16),
        paddingHorizontal: horizontalScale(16)
    },
    selectedWallet: {
        backgroundColor: theme.colors.grey
    },
    selectText: {
        fontSize: horizontalScale(14),
        lineHeight: horizontalScale(18),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(8)
    },
    passwordInput: {
        paddingTop: verticalScale(30),
    },
    notificationContainer: {
        marginTop: verticalScale(50),
        marginBottom: verticalScale(50),
        marginHorizontal: -horizontalScale(16)
    },
    blankNotification: {
        height: verticalScale(92)
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: horizontalScale(18)
    },
    button: {
        flex: 1
    }
})

export default TestPassword;