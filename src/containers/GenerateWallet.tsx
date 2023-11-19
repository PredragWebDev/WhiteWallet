import AppButton from "@/components/common/AppButton";
import AppLayout from "@/components/common/AppLayout";
import AppTextInput from "@/components/common/AppTextInput";
import Header from "@/components/common/Header";
import { verticalScale } from "@/helpers/scale";
import React from "react";
import { StyleSheet, View } from "react-native";

const GenerateWallet = () => {
    return(
        <AppLayout>
            <Header 
                title="Generate Wallet"
            />
            <View style={styles.container}>
                <AppTextInput
                    placeholder="Wallet name"
                    icon="folder"
                    />
                <AppTextInput
                    placeholder="Password"
                    icon="lock"
                    type="secure"
                    style={styles.textInput}
                />
            </View>
            <AppButton
                text="NEXT"
            />
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(60),
        marginBottom: verticalScale(300)
    },
    textInput: {
        marginTop: verticalScale(30)
    }
})

export default GenerateWallet;