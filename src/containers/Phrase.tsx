import AppButton from '@/components/common/AppButton'
import AppCheckBox from '@/components/common/AppCheckBox'
import AppLayout from '@/components/common/AppLayout'
import AppText from '@/components/common/AppText'
import { horizontalScale, verticalScale } from '@/helpers/scale'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const phrases = ["Confirm", "Confirm", "Confirm", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan"];

const Phrase = () => {
    const [written, setWritten] = useState<boolean>(false)
    return (
        <AppLayout>
            <View>
                <AppText style={styles.description}>
                    Write down these Recovery Words and Your Password
                </AppText>
                <View style={styles.phraseContainer}>
                    {phrases.map((item, index) => (
                        <AppText>
                            {`${index + 1}. `}{item}
                        </AppText>
                    ))}
                </View>
                <AppText style={styles.text}>
                    You can recover your wallet in any bitcoin wallet with:
                </AppText>
                <AppText style={styles.text}>
                &nbsp;&#x2022;&nbsp;recovery words
                </AppText>
                <AppText style={styles.text}>
                &nbsp;&#x2022;&nbsp;password
                </AppText>

                <View style={styles.checkBoxContainer}>
                    <AppCheckBox value={written} onPress={() => setWritten(prev => !prev)} />
                    <AppText style={styles.text}>
                     I have written down phrase/password
                    </AppText>
                </View>

                <AppButton 
                    style={styles.button}
                    text='GENERATE WALLET'
                    handleClick={() => {}}
                />
            </View>
        </AppLayout>
    )
}

const styles = StyleSheet.create({
    description: {
        marginTop: verticalScale(37),
        fontSize: horizontalScale(16),
        lineHeight: horizontalScale(20),
        paddingRight: horizontalScale(10)
    },
    phraseContainer: {
        marginTop: verticalScale(40),
        marginBottom: verticalScale(120),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    phrase: {
        fontSize: horizontalScale(14),
        lineHeight: horizontalScale(18),
        marginBottom: verticalScale(15)
    },
    text: {
        fontSize: horizontalScale(14),
        lineHeight: horizontalScale(18)
    },
    checkBoxContainer: {
        marginTop: verticalScale(40),
        marginBottom: verticalScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: horizontalScale(-8)
    },
    button: {
        marginBottom: verticalScale(30)
    }
})

export default Phrase; 