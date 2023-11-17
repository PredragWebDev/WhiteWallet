import CircleCheckIcon from '@/assets/icons/CircleCheckIcon'
import PowerIcon from '@/assets/icons/PowerIcon'
import theme from '@/constants/theme'
import { horizontalScale, verticalScale } from '@/helpers/scale'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'

export enum Status {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

interface Props {
    peers: number;
    BTS2USD: number;
    checkStatus?: Status,
    powerStatus?: Status
}

const StatusBar = ({peers, BTS2USD, checkStatus = Status.SUCCESS, powerStatus = Status.SUCCESS}: Props) => {
    let checkColor: string, powerColor: string;
    switch (checkStatus) {
        case Status.SUCCESS:
            checkColor = theme.colors.iconGreen
            break;
        case Status.WARNING:
            checkColor = theme.colors.iconYellow
            break;
        case Status.ERROR:
            checkColor = theme.colors.iconRed
            break;
    }

    switch (powerStatus) {
        case Status.SUCCESS:
            powerColor = theme.colors.iconGreen
            break;
        case Status.WARNING:
            powerColor = theme.colors.iconYellow
            break;
        case Status.ERROR:
            powerColor = theme.colors.iconRed
            break;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <CircleCheckIcon props={{
                    style: {
                        marginRight: horizontalScale(10)
                    }
                }} color={checkColor} />
                <PowerIcon color={powerColor}/>
            </View>
            <View style={styles.subContainer}>
                <AppText style={styles.text}>
                    Peers: {peers}
                </AppText>
                <AppText style={styles.text}>
                    BTS/USD: ${BTS2USD}
                </AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bgBlack,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: verticalScale(3),
        paddingHorizontal: horizontalScale(16)
    },
    subContainer: {
        flexDirection: 'row'
    },
    text: {
        marginLeft: horizontalScale(14),
        fontSize: horizontalScale(10),
        lineHeight: horizontalScale(12),
        color: theme.colors.white
    }
})

export default StatusBar;