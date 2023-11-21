import { TestPasswordScreen } from '@/AppNavigation'
import AppButton from '@/components/common/AppButton'
import AppCheckBox from '@/components/common/AppCheckBox'
import AppLayout from '@/components/common/AppLayout'
import AppText from '@/components/common/AppText'
import { horizontalScale, verticalScale } from '@/helpers/scale'
import useAppNavigation from '@/hooks/useAppNavigation'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const phrases = ["Confirm", "Confirm", "Confirm", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan", "Quantuan"];

const Phrase = () => {
    const navigation = useAppNavigation();

    const [written, setWritten] = useState<boolean>(false);

    const generateWallet = () => {
        if(written){
            navigation.navigate(TestPasswordScreen)
        }
    }

    return (
        <AppLayout>
            <View>
                <AppText style={styles.description}>
                    Write down these Recovery Words and Your Password
                </AppText>
                <View style={styles.phraseContainer}>
                    {Array(3).fill(null).map((_, index) => (
                        <View key={`column_${index}`} style={styles.column}>
                            {phrases.filter((_, idx) => idx % 3 === index).map((item, idx) => (
                                <AppText key={`phrase_${item}_${index}_${idx}`} style={styles.phrase}>
                                    {`${idx * 3 + index + 1}. `}{item}
                                </AppText>
                            ))}
                        </View>
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
                    handleClick={generateWallet}
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
    },
    column: {
        flex: 1
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