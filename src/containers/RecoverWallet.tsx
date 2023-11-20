import ExpandIcon from "@/assets/icons/ExpandIcon";
import ExpandedIcon from "@/assets/icons/ExpandedIcon";
import AppButton from "@/components/common/AppButton";
import AppLayout from "@/components/common/AppLayout";
import AppNotification, { NotificationType } from "@/components/common/AppNotification";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import Header from "@/components/common/Header";
import theme from "@/constants/theme";
import { horizontalScale, verticalScale } from "@/helpers/scale";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

enum RecoverResult {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    PENDING = 'PENDING'
}

const RecoverWallet = () => {
    const [advancedOptionsExpanded, setAdvancedOptionsExpanded] = useState<boolean>(false)
    const [recoverResult, setRecoverResult] = useState<RecoverResult>(RecoverResult.PENDING)

    const recoverWallet = () => {

    }

    return (
        <AppLayout noPadding>
            <Header
                title="Recover Wallet"
                withBackButton
            />
            <View style={styles.container}>
                <AppText style={styles.headUp}>
                    Heads up!
                </AppText>
                <AppText style={styles.description}>
                    At recovery, the wallet is unable to check if your password is correct or not. If you provide a wrong password, a wallet will be recovered with the provided Recovery Words and password combination.
                </AppText>
                <AppTextInput
                    placeholder="Wallet name"
                    icon="folder"
                />
                <AppTextInput
                    placeholder="Password"
                    icon="lock"
                    type="secure"
                    style={styles.secureInput}
                />
                <AppTextInput
                    placeholder="Recovery words"
                    icon="lock"
                    type="secure"
                    style={styles.secureInput}
                />
                <TouchableOpacity onPress={() => setAdvancedOptionsExpanded(prev => !prev)}>
                    <View style={styles.advancedOptionTitleContainer}>
                        {advancedOptionsExpanded ? <ExpandedIcon /> : <ExpandIcon />}
                        <AppText style={styles.advancedOptionTitle}>
                            Advanced options
                        </AppText>
                    </View>
                </TouchableOpacity>

                {advancedOptionsExpanded && <View>
                    <AppText style={styles.accountKeyPath}>
                        Account Key Path:
                    </AppText>

                    <AppTextInput
                        value="m/84’/0’/0’"
                        contentStyle={styles.accountKeyPathInput}
                    />

                    <AppText style={styles.accountKeyPath}>
                        Minimum Gap Limit:
                    </AppText>

                    <AppTextInput
                        value="100"
                        contentStyle={styles.accountKeyPathInput}
                    />
                </View>}

                <View style={styles.notificationContainer}>
                    {recoverResult === RecoverResult.SUCCESS &&
                        <AppNotification
                            type={NotificationType.SUCCESS}
                            title="Success!"
                            content="Wallet recovered"
                        />}
                    {recoverResult === RecoverResult.ERROR &&
                        <AppNotification
                            type={NotificationType.ERROR}
                            title="Error!"
                            content="Wrong passphrase."
                        />}
                </View>

                <AppButton
                    style={styles.button}
                    text='RECOVER WALLET'
                    type='secondary'
                    handleClick={recoverWallet}
                />
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(16)
    },
    headUp: {
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        textAlign: 'justify'
    },
    description: {
        fontSize: horizontalScale(14),
        lineHeight: horizontalScale(18),
        textAlign: 'justify',
        marginBottom: verticalScale(20)
    },
    secureInput: {
        marginTop: verticalScale(30)
    },
    advancedOptionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(22),
    },
    advancedOptionTitle: {
        color: theme.colors.white,
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        marginLeft: horizontalScale(13),
    },
    button: {
        marginTop: verticalScale(21),
        marginBottom: verticalScale(30)
    },
    accountKeyPath: {
        fontSize: horizontalScale(14),
        lineHeight: horizontalScale(18),
        color: theme.colors.grey,
        marginTop: verticalScale(6)
    },
    accountKeyPathInput: {
        color: theme.colors.grey,
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        paddingLeft: 0
    },
    notificationContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: -16
    }
})

export default RecoverWallet;     