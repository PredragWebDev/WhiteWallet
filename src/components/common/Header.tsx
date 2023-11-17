import theme from '@/constants/theme';
import { horizontalScale, verticalScale } from '@/helpers/scale';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import useAppNavigation from '@/hooks/useAppNavigation';

interface Props {
    title: string;
    withBackButton?: boolean;
}

const Header = ({ withBackButton = false, title }: Props) => {
    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            {withBackButton &&
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.canGoBack() ? navigation.goBack() : () => {}}>
                    <AppText style={styles.text}>
                        &lt;
                    </AppText>
                </TouchableOpacity>
            }
            <AppText style={styles.text}>
                {title}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: verticalScale(17),
        backgroundColor: theme.colors.bgBlack,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButton: {
        position: 'absolute',
        left: horizontalScale(16),
        marginTop: verticalScale(18)
    },
    text: {
        fontSize: horizontalScale(20),
        lineHeight: horizontalScale(25),
        color: theme.colors.white
    }
})

export default Header