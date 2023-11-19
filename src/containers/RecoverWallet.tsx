import AppLayout from "@/components/common/AppLayout";
import AppText from "@/components/common/AppText";
import AppTextInput from "@/components/common/AppTextInput";
import Header from "@/components/common/Header";
import { horizontalScale, verticalScale } from "@/helpers/scale";
import React from "react";
import { StyleSheet, View } from "react-native";

const RecoverWallet = () => {
    return (
        <AppLayout>
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
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {

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
    }
})

export default RecoverWallet;     