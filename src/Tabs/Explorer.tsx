import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainExplorer from '@/containers/Explorer/MainExplorer';

export const MainExplorerScreen = 'WhiteWallet.MainExplorerScreen'

const ExplorerStack = createNativeStackNavigator()

const Explorer = () => {
    return (
        <ExplorerStack.Navigator initialRouteName={MainExplorerScreen} screenOptions={{
            headerShown: false
        }}>
            <ExplorerStack.Screen
                name={MainExplorerScreen}
                component={MainExplorer}
            />
        </ExplorerStack.Navigator>
    )
}

export default Explorer;
